import type {
  ResultSet,
  PivotConfig,
  QueryRecordType,
  DeeplyReadonly,
  Query,
  QueryType,
} from "@cubejs-client/core";

const cubeSeriesHandler = (
  resultSet: (ResultSet<any> & { queryType?: QueryType }) | null,
  pivot: PivotConfig[] | undefined
) => {
  if (!resultSet) {
    return [];
  } else if (resultSet.queryType === "blendingQuery") {
    return resultSet.decompose().map((res: ResultSet<any>, idx: number) => {
      return res.series(pivot ? pivot[idx] : undefined);
    });
  } else if (resultSet.queryType === "regularQuery") {
    console.log(resultSet?.rawData());
    return resultSet.series(pivot ? pivot[0] : undefined);
  } else if (resultSet.queryType === "compareDateRangeQuery") {
    console.log(resultSet);
    return [];
  }
};

const cubeChartHandler = (
  resultSet: (ResultSet<any> & { queryType?: QueryType }) | null,
  pivot: PivotConfig[] | undefined
) => {
  if (!resultSet) {
    return [];
  } else if (resultSet.queryType === "blendingQuery") {
    return resultSet.decompose().map((res: ResultSet<any>, idx: number) => {
      return res.chartPivot(pivot ? pivot[idx] : undefined);
    });
  } else if (resultSet.queryType === "regularQuery") {
    console.log(resultSet?.chartPivot());
    return resultSet.series(pivot ? pivot[0] : undefined);
  } else if (resultSet.queryType === "compareDateRangeQuery") {
    console.log(resultSet);
    return [];
  }
};

const transDataKey = <T>(
  data: {
    [key: string]: string | number | boolean;
  }[]
): T[] => {
  return data.map((l) => {
    let tmp: any = {};
    let keys = Object.keys(l);

    keys.map((key) => {
      tmp[key.split(".")[1]] = l[key];
    });

    return tmp;
  });
};

export { cubeSeriesHandler, cubeChartHandler, transDataKey };
