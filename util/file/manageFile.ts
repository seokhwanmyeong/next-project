//  LIB
import { ColumnDef } from "@tanstack/react-table";
import { read, utils, writeFile } from "xlsx";
//  Util
import { TypeFormCsv, TypeCsvColumn } from "util/data/fileCSV";
import resizer from "util/file/resizer";

const {
  sheet_to_json,
  json_to_sheet,
  aoa_to_sheet,
  book_new,
  book_append_sheet,
} = utils;

const errorCode = {
  "0x00": "#NULL!",
  "0x07": "#DIV/0!",
  "0x0F": "#VALUE!",
  "0x17": "#REF!",
  "0x1D": "#NAME?",
  "0x24": "#NUM!",
  "0x2A": "#N/A",
  "0x2B": "#GETTING_DATA",
};

type TypeFile = {
  fileName: string;
  data: any;
};

const importFileXlsx = async (
  e: any,
  form: TypeFormCsv
): Promise<TypeFile | undefined> => {
  const { files } = e.target;
  const fileExtension = files[0]?.name?.split(".").at(-1);
  const fileName: string = files[0]?.name;

  if (!files || files.length === 0) {
    console.log("Not Import File");
    return;
  } else if (fileExtension === "xlsx" || fileExtension === "csv") {
    return await new Promise<TypeFile>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(files[0]);
      fileReader.onload = (e) => {
        let data: any[] = [];
        const error: string[] = [];

        try {
          if (!e.target) {
            console.log("Target not found");
            throw Error;
          }

          const { result } = e.target;
          const xlsxFile = read(result, { type: "binary" });
          for (const sheet in xlsxFile.Sheets) {
            if (xlsxFile.Sheets.hasOwnProperty(sheet)) {
              const transHeader: {
                [key: string]: {
                  key: string;
                  isRequired: boolean;
                  parse?: { [key: string]: string };
                };
              } = {};
              const formHeader = form.columns.map((column) => {
                transHeader[column.title] = {
                  key: column.key,
                  isRequired: column.isRequired,
                  parse: column.parse ?? undefined,
                };

                return column.title;
              });
              const sheetTable = sheet_to_json(xlsxFile.Sheets[sheet], {
                range: 1,
              });
              const filterData = sheetTable.map(
                (sheetRow: any, rowIdx: number) => {
                  let tmp: { [key: string]: any } = {};

                  //  Header Checker
                  if (rowIdx === 0) {
                    formHeader.map((header: string) => {
                      const dataKeys = Object.keys(sheetRow);
                      if (
                        !dataKeys.includes(header) &&
                        transHeader[header].isRequired
                      ) {
                        error.push(`${header} 데이터 열 부재`);
                      }
                    });
                  }

                  //  isRequired Checker & Trans Header & Value Text
                  formHeader.map((txtKey: string, colIdx: number) => {
                    if (sheetRow[txtKey]) {
                      //  parse text format
                      if (transHeader[txtKey].parse !== undefined) {
                        Object.keys(transHeader[txtKey].parse || {}).includes(
                          sheetRow[txtKey]
                        )
                          ? (tmp[transHeader[txtKey].key] =
                              transHeader[txtKey].parse?.[sheetRow[txtKey]])
                          : error.push(
                              `${colIdx + 1}열 (${txtKey})-${
                                rowIdx + 3
                              }번 행 데이터 형식 오류`
                            );
                      } else {
                        tmp[transHeader[txtKey].key] = sheetRow[txtKey];
                      }
                    } else if (transHeader[txtKey].isRequired) {
                      error.push(
                        `${colIdx + 1}열 (${txtKey})-${
                          rowIdx + 3
                        }번 행 필수값 오류`
                      );
                    }
                  });

                  return tmp;
                }
              );

              console.log("File Data", filterData);
              console.log("error", error);
              data = filterData;
            }
          }

          if (error.length > 0) {
            reject(error);
          } else {
            resolve({
              data: data,
              fileName: fileName,
            });
          }
        } catch (e) {
          console.log("error", e);
          reject(e);
        }
      };
    });
  } else {
    alert(`\nfile Extension is not .xlsx or .csv\n`);
    console.log(`\nfile Extension is not .xlsx or .csv\n`);
  }

  return;
};

const importFileSave = async (e: any): Promise<TypeFile | undefined> => {
  const { files } = e.target;
  const fileExtension = files[0]?.name?.split(".").at(-1);
  const fileName: string = files[0]?.name;

  if (!files || files.length === 0) {
    console.log("Not Import File");
    return;
  } else {
    return await new Promise<TypeFile>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(files[0]);
      fileReader.onload = (e) => {
        let data: any[] = [];
        const error: string[] = [];

        try {
          if (!e.target) {
            console.log("Target not found");
            throw Error;
          }

          const { result } = e.target;
          const xlsxFile = read(result, { type: "binary" });
          for (const sheet in xlsxFile.Sheets) {
            if (xlsxFile.Sheets.hasOwnProperty(sheet)) {
              const sheetData = sheet_to_json(xlsxFile.Sheets[sheet]);
              data = sheetData;
            }
          }

          if (error.length > 0) {
            reject(error);
          } else {
            resolve({
              data: data,
              fileName: fileName,
            });
          }
        } catch (e) {
          console.log("error", e);
          reject(e);
        }
      };
    });
  }
};

const exportFileCSV = async (
  data: any,
  columns: ColumnDef<any>[],
  fileName: string
) => {
  let exportHeader: { [key: string]: string } = {};
  const exportKey = columns
    .filter((column: any) => (column?.id ? true : false))
    .map((column: any) => {
      exportHeader[column.id] = column.header;

      return column.id;
    });

  const exportData = data.map((dataRow: any) => {
    let result: { [key: string]: string } = {};

    exportKey.map((key: string) => {
      result[exportHeader[key]] = dataRow[key];
    });

    return result;
  });

  const sheet = json_to_sheet(exportData);
  const workBook = book_new();

  book_append_sheet(workBook, sheet, "매장정보");
  await writeFile(workBook, `${fileName}_${Date.now()}.csv`, {
    bookType: "csv",
  });
};

const exportFormCsv = (form: TypeFormCsv) => {
  const { fileName, sheetName, desc, columns } = form;
  let header: string[] = [];
  let sampleColumn: {
    t: string;
    v: string | number;
    w?: string;
    z?: string;
  }[] = [];

  columns.map((column: TypeCsvColumn) => {
    header.push(column.title);
    sampleColumn.push({
      t: column.t,
      v: column.v,
      w: column.w,
      z: column.z,
    });
  });

  const data = [[desc], [...header], [...sampleColumn]];
  const sheet = aoa_to_sheet(data);
  const workBook = book_new();

  book_append_sheet(workBook, sheet, sheetName);
  writeFile(workBook, `${fileName}.csv`, { bookType: "csv" });
};

const importFileImg = async (files: any) => {
  let incodingType: string = "base64";

  return await Promise.all(
    files.map(
      (file: any) =>
        new Promise((resolve) => {
          return resizer.imageFileResizer(
            file,
            600,
            400,
            "JPEG",
            100,
            0,
            (uri: any) => {
              resolve(uri);
            },
            incodingType
          );
        })
    )
  )
    .then((res) => {
      res.map((src) => {
        let base64Length, padding, fileSize;

        switch (incodingType) {
          case "blob":
            base64Length = src.length - (src.indexOf(",") + 1);
            padding =
              src.charAt(src.length - 2) === "="
                ? 2
                : src.charAt(src.length - 1) === "="
                ? 1
                : 0;
            fileSize = base64Length * 0.75 - padding;
            console.log("FileSize: " + fileSize);
            break;
          case "base64":
            base64Length = src.length - (src.indexOf(",") + 1);
            padding =
              src.charAt(src.length - 2) === "="
                ? 2
                : src.charAt(src.length - 1) === "="
                ? 1
                : 0;
            fileSize = base64Length * 0.75 - padding;
            console.log("FileSize: " + fileSize);
            break;
          case "file":
            console.log(src);
            break;
          default:
        }
      });
      return res;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export {
  importFileXlsx,
  importFileSave,
  exportFileCSV,
  exportFormCsv,
  importFileImg,
};
