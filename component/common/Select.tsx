//  Lib
import { useCallback, useEffect, useId, useState } from "react";
import { Flex, Select as ChakraSelect } from "@chakra-ui/react";
//  Services
import { addrApiHandler } from "services/address/sgisDepthAddr";
//  Util: Data
import { addrHCode } from "util/data/address";

type PropsSlct = {
  selectProps?: {};
  variant?: string;
  defalutValue?: string | number;
  defaultText?: string;
  value?: any;
  data: any[];
  opBaseTxt: string;
  opBaseId: string;
  opBaseKey: string;
  onChange: any;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
};

type PropSlctAddr = {
  selectProps?: {};
  variant?: string;
  value: string;
  onChange: any;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
};

const Select = ({
  selectProps,
  variant,
  value,
  defaultText = "선택",
  defalutValue,
  data,
  opBaseTxt,
  opBaseId,
  opBaseKey,
  onChange,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  isRequired = false,
}: PropsSlct) => {
  const generatedId = useId();
  const defaultId = defalutValue ? defalutValue : generatedId;

  return (
    <ChakraSelect
      {...selectProps}
      variant={variant}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      onChange={(e) => onChange(e.target.value)}
      // defaultValue={defaultId}
      value={value}
    >
      {!defalutValue && (
        <option key={defaultId} value={defaultId} hidden>
          {defaultText}
        </option>
      )}
      {data?.length > 0 &&
        data.map((option: any, idx: number) => {
          const opKey = option[opBaseKey];
          const opId = option[opBaseId];
          const opTxt = option[opBaseTxt];

          return (
            <option key={`${idx}-${opId}`} value={opKey} id={opId}>
              {opTxt}
            </option>
          );
        })}
    </ChakraSelect>
  );
};

const SelectAddr = ({
  selectProps,
  variant,
  value,
  onChange,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  isRequired = false,
}: PropSlctAddr) => {
  const [addr, setAddr] = useState({
    top: value?.slice(0, 2) || "total",
    mid: value?.slice(2, 5) || "",
    bot: value?.slice(5, 8) || "",
  });
  const [addrList, setAddrList] = useState<any>({
    top: [{ code: "", address: "전체" }, ...addrHCode],
    mid: [],
    bot: [],
  });

  const selectAddrHandler = (val: any, step: "top" | "mid" | "bot") => {
    let result: string = "total";

    switch (step) {
      case "top":
        if (val) {
          addrApiHandler(val).then((res) => {
            setAddr({ top: val, mid: "", bot: "" });
            setAddrList({
              ...addrList,
              mid: res ? [{ code: "", address: "전체" }, ...res] : [],
              bot: [],
            });
          });
        } else {
          setAddr({ top: val, mid: "", bot: "" });
          setAddrList({
            ...addrList,
            mid: [],
            bot: [],
          });
        }
        result = val ? val : "total";
        break;
      case "mid":
        if (val) {
          console.log(val);
          addrApiHandler(val).then((res) => {
            setAddr({ ...addr, mid: val.slice(2, 5), bot: "" });
            setAddrList({
              ...addrList,
              bot: res ? [{ code: "", address: "전체" }, ...res] : [],
            });
          });
        } else {
          setAddr({ ...addr, mid: val, bot: "" });
          setAddrList({
            ...addrList,
            bot: [],
          });
        }
        result = val ? val : addr.top;
        break;
      case "bot":
        setAddr({ ...addr, bot: val.slice(5, 8) });
        result = val ? val : addr.top + addr.mid;
        break;
      default:
        result = val;
        break;
    }
    onChange(result);
  };

  return (
    <Flex gap={2} w="100%">
      <Select
        selectProps={selectProps}
        variant={variant}
        data={addrList.top}
        opBaseTxt="address"
        opBaseId="code"
        opBaseKey="code"
        onChange={(val: any) => selectAddrHandler(val, "top")}
        defaultText="전체"
        defalutValue="total"
      />
      <Select
        selectProps={selectProps}
        variant={variant}
        data={addrList.mid}
        opBaseTxt="address"
        opBaseId="code"
        opBaseKey="code"
        onChange={(val: any) => selectAddrHandler(val, "mid")}
        isDisabled={addrList.mid.length > 0 ? false : true}
        defaultText={addrList.mid.length > 0 ? "전체" : "시/군/구"}
        defalutValue=""
      />
      <Select
        selectProps={selectProps}
        variant={variant}
        data={addrList.bot}
        opBaseTxt="address"
        opBaseId="code"
        opBaseKey="code"
        onChange={(val: any) => selectAddrHandler(val, "bot")}
        isDisabled={addrList.bot.length > 0 ? false : true}
        defaultText={addrList.bot.length > 0 ? "전체" : "읍/면/동"}
        defalutValue=""
      />
    </Flex>
  );
};

export { Select, SelectAddr };
