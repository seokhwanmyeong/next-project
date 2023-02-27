//  LIB
import { useState, useRef } from "react";
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  Button,
  Flex,
  Radio,
  Text,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  List,
  ListItem,
  Image,
} from "@chakra-ui/react";

import DaumPostcode from "react-daum-postcode";
//  Icons
import { IconDownload, IconFileAdd } from "assets/icons/icon";
//  Util
import {
  importFileXlsx,
  importFileSave,
  importFileImg,
} from "util/file/manageFile";
//  Type
import { TypeFormCsv } from "util/data/fileCSV";
import dayjs from "dayjs";

interface InpProps {
  fieldKey?: string;
  type?: string;
  value?: any;
  onChange: any;
  variant?: string;
  inputProps?: {};
  placeholder?: string;
  _placeholder?: Object;
  focusBorderColor?: string;
  errorBorderColor?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

interface InpPwdProps extends InpProps {
  type?: "single" | "chk";
  groupProps?: {};
  addonProps?: {};
  btnProps?: {};
  autoComplete?: "on" | "off";
}

interface InpAddonProps extends InpProps {
  groupProps?: {};
  addonText?: string;
  addonType?: string;
  addonProps?: Object;
}

interface InpDateProps extends InpProps {
  type?: "single" | "double";
  value?: { start: string; end: string } | string | undefined;
  groupProps?: {};
  addonProps?: {};
  btnProps?: {};
}

interface InpFileProps extends InpProps {
  accept: ".xlsx, .csv" | ".xlsx";
  form?: TypeFormCsv;
  groupProps?: {};
  addonProps?: {};
  btnProps?: {};
}

interface InpAddressProps extends InpProps {
  groupProps?: {};
  addonProps?: {};
  btnProps?: {};
}

const Input = ({
  fieldKey,
  type = "text",
  value,
  onChange,
  variant,
  inputProps,
  placeholder,
  _placeholder,
  focusBorderColor,
  errorBorderColor,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  isRequired = false,
}: InpProps) => {
  return (
    <ChakraInput
      id={fieldKey}
      type={type}
      value={value}
      onChange={(e: any) => onChange(e.target.value)}
      variant={variant}
      placeholder={placeholder}
      _placeholder={_placeholder}
      focusBorderColor={focusBorderColor}
      errorBorderColor={errorBorderColor}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      {...inputProps}
    />
  );
};

const InputDate = ({
  fieldKey,
  type = "single",
  value: date,
  onChange,
  variant,
  inputProps,
  placeholder,
  _placeholder,
  focusBorderColor,
  errorBorderColor,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  isRequired = false,
}: InpDateProps) => {
  const validate = (startD: any, endD: any) =>
    new Date(startD).getTime() > new Date(endD).getTime();

  const dateHandler = (dateVal: string, both: "start" | "end") => {
    if (typeof date === ("string" || undefined) && type === "single") {
      onChange(dateVal);
    } else if (typeof date === "object") {
      if (both === "start") {
        onChange({ start: dateVal, end: date.end });
      } else if (both === "end") {
        onChange({ start: date.start, end: dateVal });
      }
    }
  };

  return (
    <Flex gap={2} w="100%" alignItems="center">
      <Flex w="100%">
        <ChakraInput
          id={fieldKey}
          type="date"
          value={
            date === undefined
              ? String(new Date())
              : typeof date === "string"
              ? date
              : date.start
          }
          onChange={(e: any) => dateHandler(e.target.value, "start")}
          variant={variant}
          placeholder={placeholder}
          _placeholder={_placeholder}
          focusBorderColor={focusBorderColor}
          errorBorderColor={errorBorderColor}
          isDisabled={isDisabled}
          isInvalid={
            typeof date === "object" && date
              ? validate(date.start, date.end)
              : isInvalid
          }
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          {...inputProps}
        />
      </Flex>
      {type === "double" && typeof date === "object" && (
        <>
          <Flex>~</Flex>
          <Flex w="100%">
            <ChakraInput
              id={`${fieldKey}-end`}
              type="date"
              value={date.end === undefined ? String(new Date()) : date.end}
              onChange={(e: any) => dateHandler(e.target.value, "end")}
              variant={variant}
              placeholder={placeholder}
              _placeholder={_placeholder}
              focusBorderColor={focusBorderColor}
              errorBorderColor={errorBorderColor}
              isDisabled={isDisabled}
              isInvalid={validate(date.start, date.end)}
              isReadOnly={isReadOnly}
              isRequired={isRequired}
              {...inputProps}
            />
          </Flex>
        </>
      )}
    </Flex>
  );
};

const InputTotalDate = ({
  fieldKey,
  value,
  onChange,
  inputProps,
  _placeholder,
  focusBorderColor,
  errorBorderColor,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  isRequired = false,
}: any) => {
  return (
    <Flex gap="1rem">
      <Radio
        key={`radio-date-total`}
        value={"total"}
        isChecked={value === "total"}
        onChange={() => {
          onChange("total");
        }}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        w="max-content"
        size="md"
      >
        전체기간
      </Radio>
      <Radio
        key={`radio-date-duration`}
        onChange={() => {
          onChange(
            value !== "total"
              ? value
              : {
                  start: dayjs().format("YYYY-MM-DD"),
                  end: dayjs().format("YYYY-MM-DD"),
                }
          );
        }}
        isChecked={value !== "total"}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
      >
        <InputDate
          type="double"
          fieldKey={fieldKey}
          value={
            value !== "total"
              ? value
              : {
                  start: dayjs().format("YYYY-MM-DD"),
                  end: dayjs().format("YYYY-MM-DD"),
                }
          }
          onChange={onChange}
          placeholder=""
          _placeholder={_placeholder}
          inputProps={inputProps}
          focusBorderColor={focusBorderColor}
          errorBorderColor={errorBorderColor}
        />
      </Radio>
    </Flex>
  );
};

const InputFile = ({
  fieldKey,
  form,
  accept,
  value,
  onChange,
  groupProps,
  placeholder,
  _placeholder,
  focusBorderColor,
  errorBorderColor,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  isRequired = false,
  ...rest
}: InpFileProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  return (
    <Flex
      {...groupProps}
      position="relative"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="0"
      w="100%"
      h="30rem"
      bgColor="primary.main.bg"
      border="1px dashed"
      borderColor="primary.main.bdColor"
      borderRadius="base"
    >
      <ChakraInput
        variant="fileHidden"
        id={`${fieldKey}-hidden`}
        type="file"
        value={value}
        onChange={(e: any) => {
          form
            ? importFileXlsx(e, form)
                .then((res) => {
                  if (res) {
                    const { data, fileName } = res;

                    onChange(data);
                    setFileName(fileName);
                  }
                })
                .catch((e) => {
                  e.length > 0
                    ? alert(e)
                    : alert(
                        "파일에 오류가 있습니다. 행/열/필수값을 확인해주세요"
                      );
                })
            : importFileSave(e)
                .then((res) => {
                  if (res) {
                    const { data, fileName } = res;

                    onChange(data);
                    setFileName(fileName);
                  }
                })
                .catch((e) => {
                  e.length > 0
                    ? alert(e)
                    : alert(
                        "파일에 오류가 있습니다. 행/열/필수값을 확인해주세요"
                      );
                });
        }}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        aria-hidden="true"
        accept={accept}
        ref={fileRef}
      />
      <IconDownload boxSize="4rem" mb="1rem" />
      {fileName ? (
        <Text mb="0.5rem">{fileName}</Text>
      ) : (
        <Text mb="0.5rem">파일을 드래그 해보세요.</Text>
      )}
      <Text mb="2rem">파일 형식 제한없음 (최대 40MB)</Text>
      <Button
        variant="reverse"
        onClick={(e) => {
          e.stopPropagation();
          fileRef.current?.click();
        }}
        zIndex="2"
        gap="0.5rem"
      >
        <IconFileAdd />
        파일 등록하기
      </Button>
    </Flex>
  );
};

const InputImg = ({
  fieldKey,
  form,
  value,
  onChange,
  groupProps,
  placeholder,
  _placeholder,
  focusBorderColor,
  errorBorderColor,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  isRequired = false,
  ...rest
}: InpFileProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [selectImg, setSelectImg] = useState<number>(0);
  const [imgList, setImgList] = useState<any[] | never[]>([]);
  console.log(value);
  const uploadBtnHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    fileRef.current?.click();
  };

  return (
    <Flex flexDirection="column" gap="1rem" w="100%">
      <Flex
        {...groupProps}
        position="relative"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p="0"
        w="100%"
        h="30rem"
        borderRadius="base"
        bgColor="primary.main.bg"
      >
        {imgList.length > 0 && (
          <Image
            src={imgList[selectImg]}
            alt=""
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="100%"
            h="100%"
            opacity={0.8}
            borderRadius="base"
            border="none"
            transition="0.3s"
          />
        )}
        <ChakraInput
          variant="fileHidden"
          id={`${fieldKey}-hidden`}
          type="file"
          value={value}
          multiple
          onChange={async (e: any) => {
            const fileList = [...e.target.files];

            if (imgList?.length + fileList.length < 4) {
              const list = await importFileImg([...e.target.files]);
              setSelectImg(0);
              setImgList([...imgList, ...list]);
              // onChange([...imgList, ...list]);
            } else {
              alert("이미지는 최대 3개까지 가능합니다");
            }
          }}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          aria-hidden="true"
          accept={".jpg, .png"}
          ref={fileRef}
        />
        <IconDownload boxSize="4rem" mb="1rem" />
        <Text mb="0.5rem">이미지를 드래그 해보세요.</Text>
        <Text mb="2rem">이미지 형식: jpg/png (최대 500kb)</Text>
        <Button
          variant="reverse"
          onClick={uploadBtnHandler}
          zIndex="2"
          gap="0.5rem"
        >
          <IconFileAdd />
          이미지 등록하기
        </Button>
      </Flex>
      {imgList.length > 0 && (
        <List display="flex" w="100%" justifyContent="center" gap="3rem">
          {imgList.map((img: any, idx: number) => (
            <ListItem
              key={`img-${idx}`}
              onClick={() => setSelectImg(idx)}
              position="relative"
              outline={idx === selectImg ? "1px solid" : "none"}
              p="0.5rem"
              cursor="pointer"
              transition="0.3s"
              _hover={{
                outline: "1px solid",
              }}
            >
              <Image
                alt="등록 이미지"
                src={img}
                w="5rem"
                h="4rem"
                transition="0.3s"
                borderRadius="base"
              />
              <Button
                position="absolute"
                top={0}
                right={0}
                w="2rem"
                h="2rem"
                p="0"
                onClick={(e) => {
                  e.stopPropagation();
                  const newArr = [...imgList];
                  newArr.splice(idx, 1);
                  setSelectImg(0);
                  setImgList(newArr);
                  // onChange(newArr);
                }}
              >
                X
              </Button>
              {/* <a href={img} download>
                이미지 {idx}
              </a> */}
            </ListItem>
          ))}
        </List>
      )}
    </Flex>
  );
};

const InputAddr = ({
  fieldKey,
  value,
  onChange,
  variant,
  inputProps,
  groupProps,
  placeholder,
  _placeholder,
  focusBorderColor,
  errorBorderColor,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  isRequired = false,
}: InpAddressProps) => {
  const [address, setAddress] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addressHandler = () => {
    onChange();
  };
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    onChange(fullAddress);
    onClose();
  };

  // const handleSearch = (data) => {
  //   console.log(data);
  // };

  return (
    <Flex w="100%" h="100%">
      <Button w="100%" h="3.6rem" onClick={onOpen}>
        {value}
      </Button>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="auto" maxW="auto">
          <ModalBody
            p="0"
            w="30vw"
            h="40vh"
            borderRadius="base"
            overflow="hidden"
          >
            <DaumPostcode onComplete={handleComplete} />
          </ModalBody>
        </ModalContent>
      </ChakraModal>
    </Flex>
  );
};

export { Input, InputDate, InputTotalDate, InputFile, InputImg, InputAddr };
