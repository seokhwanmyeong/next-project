type TypeCsvColumn = {
  title: string;
  key: string;
  t: "b" | "e" | "n" | "d" | "s" | "z";
  isRequired: boolean;
  v: string | number;
  w?: string;
  z?: string;
  parse?: { [key: string]: string };
};

type TypeFormCsv = {
  fileName: string;
  sheetName: string;
  desc: string;
  columns: TypeCsvColumn[];
};

const csvStoreInfo: TypeFormCsv = {
  fileName: "비즈레시피 매장정보 양식",
  sheetName: "매장",
  desc: "기본정보 ('*' = 필수입력)",
  columns: [
    {
      title: "*매장명",
      key: "name",
      t: "s",
      isRequired: true,
      v: "합정점",
    },
    {
      title: `*사업자등록번호 \n(숫자만 입력)`,
      key: "biz_number",
      t: "s",
      isRequired: true,
      v: "1112233333",
    },
    {
      title: "*매장코드",
      key: "code",
      t: "s",
      isRequired: true,
      v: "A123",
    },
    {
      title: `*상태\n(개점/폐점/휴점/대기/기타)`,
      key: "status",
      t: "s",
      isRequired: true,
      v: "개점",
      parse: {
        개점: "STATUS_OPEN",
        폐점: "STATUS_CLOSE",
        휴점: "STATUS_REST",
        대기: "STATUS_READY",
        기타: "STATUS_ETC",
      },
    },
    {
      title: `타입\n(A타입/B타입/C타입/D타입/E타입)`,
      key: "rank",
      t: "s",
      isRequired: false,
      v: "A타입",
      parse: {
        A타입: "A_RANK",
        B타입: "B_RANK",
        C타입: "C_RANK",
        D타입: "D_RANK",
        E타입: "E_RANK",
      },
    },
    {
      title: `개업일 \n(yyyy-mm-dd)`,
      key: "open_date",
      t: "s",
      isRequired: false,
      v: "2004-12-29",
    },
    {
      title: `*매장연락처 \n(숫자만 입력)`,
      key: "phone",
      t: "s",
      isRequired: true,
      v: "027778888",
    },
    {
      title: `*주소 \n(정확한 도로명 주소까지만 기재)`,
      key: "address",
      t: "s",
      isRequired: true,
      v: "서울시 마포구 양화로 81",
    },
    {
      title: `*상세주소 \n(도로명 주소 이하 상세주소 입력)`,
      key: "address_detail",
      t: "s",
      isRequired: true,
      v: "1층",
    },
    {
      title: "*대표자",
      key: "owner_name",
      t: "s",
      isRequired: true,
      v: "김민수",
    },
    {
      title: `*대표자연락처 \n(숫자만 입력)`,
      key: "owner_phone",
      t: "s",
      isRequired: true,
      v: "01022223333",
    },
    {
      title: `*영업상권 \n(반경만가능 / 단위: m / 제한: 3000)`,
      key: "phone",
      t: "n",
      isRequired: true,
      v: "1500",
    },
  ],
};

const csvStoreSale: TypeFormCsv = {
  fileName: "비즈레시피 매장매출정보 양식",
  sheetName: "매장매출",
  desc: "기본정보 ('*' = 필수입력)",
  columns: [
    {
      title: "*브랜드명",
      key: "brandName",
      t: "s",
      isRequired: true,
      v: "비즈레시피",
    },
    {
      title: "*매장(가맹점)명",
      key: "name",
      t: "s",
      isRequired: true,
      v: "합정점",
    },
    {
      title: "*매장코드",
      key: "code",
      t: "s",
      isRequired: true,
      v: "A123",
    },
    {
      title: `판매일자 \n(YYYYMMDD)`,
      key: "saleDay",
      t: "s",
      isRequired: true,
      v: "2004-12-29",
    },
    {
      title: `판매시간 \n(HH:MM:SS)`,
      key: "saleTime",
      t: "s",
      isRequired: true,
      v: "12:32:25",
    },
    {
      title: "메뉴명",
      key: "saleMenu",
      t: "s",
      isRequired: true,
      v: "어린이세트",
    },
    {
      title: "주문수량",
      key: "saleCount",
      t: "s",
      isRequired: true,
      v: "1",
    },
    {
      title: "매출",
      key: "saleAmount",
      t: "s",
      isRequired: true,
      v: "15000",
    },
    {
      title: `주소(배달 시)`,
      key: "address",
      t: "s",
      isRequired: false,
      v: "서울시 마포구 양화로 81 101호",
    },
    {
      title: `주문방식 \n(배달/포장)`,
      key: "orderType",
      t: "s",
      isRequired: false,
      v: "배달",
      parse: {
        배달: "test1",
        포장: "test2",
      },
    },
  ],
};

export { csvStoreInfo, csvStoreSale };
export type { TypeCsvColumn, TypeFormCsv };
