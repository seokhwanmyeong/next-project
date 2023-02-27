//  Lib
import { HTMLProps, useRef, useEffect } from "react";
import {
  Flex,
  Checkbox as ChakraCheckbox,
  CheckboxGroup as ChakraCheckboxGroup,
} from "@chakra-ui/react";
//  Components
import Tag from "component/common/Tag";

type ChekboxProps = {
  title?: any;
  isChecked?: boolean;
  onChange?: any;
  value?: any;
};

interface ChekboxTagProps extends ChekboxProps {
  isDisabled?: boolean;
  isCustom?: boolean;
  children?: any;
  checkBoxProps?: any;
}

const CheckBox = ({ title, isChecked, onChange, value }: ChekboxProps) => {
  return (
    <ChakraCheckbox isChecked={isChecked} onChange={onChange} value={value}>
      {title}
    </ChakraCheckbox>
  );
};

const CheckBoxTag = ({
  title,
  isChecked,
  isDisabled = false,
  onChange,
  value,
  checkBoxProps,
}: ChekboxTagProps) => {
  return (
    <ChakraCheckbox
      variant="withTag"
      isChecked={isChecked}
      onChange={onChange}
      value={value}
      isDisabled={isDisabled}
      {...checkBoxProps}
    >
      <Tag
        variant="checkbox"
        key={`tag-${title}`}
        text={title ?? ""}
        hasBtn={false}
        tagBtn={true}
        isChecked={isChecked}
      />
    </ChakraCheckbox>
  );
};

const TableCheckBox = ({
  indeterminate,
  checked,
  onChange,
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <ChakraCheckbox
      key={`td-chk-total`}
      ref={ref}
      isChecked={checked}
      onChange={(e) => {
        e.stopPropagation();
        onChange && onChange(e);
      }}
    />
  );
};

const CheckboxGroup = ({
  chkboxData,
  chkValue,
  defaultValue = [],
  isDisabled = false,
  onChange,
  variant,
  activeTotal = false,
  parseTotalTxt = "전체",
}: {
  chkboxData: { text: string; value: string | number }[];
  chkValue: (string | number)[];
  defaultValue?: (string | number)[];
  isDisabled?: boolean;
  onChange: (value: (string | number)[] | string) => void;
  variant?: string;
  activeTotal?: boolean;
  parseTotalTxt?: string;
}) => {
  const originLength = chkboxData.length;

  const chkHandler = (val: (string | number)[]) => {
    const exceptTotal = val.filter((l: string | number) => l !== "total");

    if (activeTotal) {
      if (exceptTotal.length === originLength) {
        onChange(["total"]);
      } else {
        onChange(exceptTotal);
      }
    } else {
      onChange(exceptTotal);
    }
  };

  const totalTrans = () => {
    if (Array.isArray(chkValue)) {
      return chkValue.length === originLength ? ["total"] : chkValue;
    } else {
      return ["total"];
    }
  };

  return (
    <ChakraCheckboxGroup
      defaultValue={activeTotal ? ["total"] : defaultValue}
      value={activeTotal ? totalTrans() : chkValue}
      isDisabled={isDisabled}
      onChange={chkHandler}
      variant={variant}
    >
      <Flex w="100%" justifyContent="space-between">
        {activeTotal && (
          <ChakraCheckbox
            onChange={() => {
              if (chkValue.length === 1 && chkValue[0] === "total") {
                onChange([]);
              } else {
                onChange(["total"]);
              }
            }}
            key={`check-total`}
            value={"total"}
            fontSize="xs"
            lineHeight="1.2rem"
          >
            {parseTotalTxt}
          </ChakraCheckbox>
        )}
        {chkboxData.map((data: { text: string; value: string | number }) => (
          <ChakraCheckbox
            key={`check-${data.value}`}
            value={data.value}
            fontSize="xs"
            lineHeight="1.2rem"
          >
            {data.text}
          </ChakraCheckbox>
        ))}
      </Flex>
    </ChakraCheckboxGroup>
  );
};

const CheckboxTagGroup = ({
  chkboxData,
  chkValue,
  defaultValue = [],
  isDisabled = false,
  onChange,
  variant,
  activeTotal = false,
  parseTotalTxt = "전체",
}: {
  chkboxData: { text: any; value: string | number }[];
  chkValue: (string | number)[];
  defaultValue?: (string | number)[];
  isDisabled?: boolean;
  onChange: (value: (string | number)[] | string) => void;
  variant?: string;
  activeTotal?: boolean;
  parseTotalTxt?: string;
}) => {
  const originLength = chkboxData.length;

  const chkHandler = (val: (string | number)[]) => {
    const exceptTotal = val.filter((l: string | number) => l !== "total");
    console.log(val);
    if (activeTotal) {
      if (exceptTotal.length === originLength) {
        onChange(["total"]);
      } else {
        onChange(exceptTotal);
      }
    } else {
      onChange(exceptTotal);
    }
  };

  const totalTrans = () => {
    if (Array.isArray(chkValue)) {
      return chkValue.length === originLength ? ["total"] : chkValue;
    } else {
      return ["total"];
    }
  };

  return (
    <ChakraCheckboxGroup
      defaultValue={activeTotal ? ["total"] : defaultValue}
      value={activeTotal ? totalTrans() : chkValue}
      isDisabled={isDisabled}
      onChange={chkHandler}
      variant={variant}
    >
      <Flex w="100%" flexWrap="wrap" gap="1rem">
        {activeTotal && (
          <CheckBoxTag
            onChange={() => {
              if (chkValue.length === 1 && chkValue[0] === "total") {
                onChange([]);
              } else {
                onChange(["total"]);
              }
            }}
            key={`check-total`}
            title={parseTotalTxt}
            value={"total"}
            checkBoxProps={{
              fontSize: "xs",
            }}
          />
        )}
        {chkboxData.map((data: { text: string; value: string | number }) => (
          <CheckBoxTag
            key={`check-${data.value}`}
            title={data.text}
            value={data.value}
            checkBoxProps={{
              fontSize: "xs",
            }}
            // onChange={}
          />
        ))}
      </Flex>
    </ChakraCheckboxGroup>
  );
};

const FilterChkTagGroup = ({
  chkboxData,
  chkValue,
  defaultValue = [],
  isDisabled = false,
  onChange,
  variant,
  activeTotal = false,
  parseTotalTxt = "전체",
}: {
  chkboxData: { text: any; value: string | number }[];
  chkValue: (string | number)[];
  defaultValue?: (string | number)[];
  isDisabled?: boolean;
  onChange: (value: (string | number)[] | string) => void;
  variant?: string;
  activeTotal?: boolean;
  parseTotalTxt?: string;
}) => {
  const originLength = chkboxData.length;

  const chkHandler = (val: (string | number)[]) => {
    const exceptTotal = val.filter((l: string | number) => l !== "total");
    console.log(val);
    if (activeTotal && val.includes("total")) {
      val.length <= chkboxData.length
        ? onChange(chkboxData.map((data) => data.value))
        : onChange([]);
    } else {
      onChange(val);
    }
  };

  return (
    <ChakraCheckboxGroup
      defaultValue={defaultValue}
      value={chkValue}
      isDisabled={isDisabled}
      onChange={chkHandler}
      variant={variant}
    >
      <Flex w="100%" flexWrap="wrap" gap="1rem">
        {activeTotal && (
          <CheckBoxTag
            key={`check-total`}
            title={parseTotalTxt}
            value={"total"}
            checkBoxProps={{
              fontSize: "xs",
            }}
            isChecked={chkValue.length === chkboxData.length}
          />
        )}
        {chkboxData.map(
          ({ text, value }: { text: string; value: string | number }) => (
            <CheckBoxTag
              key={`check-${value}`}
              title={text}
              value={value}
              checkBoxProps={{
                fontSize: "xs",
              }}
              isChecked={chkValue.includes(value)}
              // onChange={}
            />
          )
        )}
      </Flex>
    </ChakraCheckboxGroup>
  );
};

export {
  CheckBox,
  CheckBoxTag,
  TableCheckBox,
  CheckboxGroup,
  CheckboxTagGroup,
  FilterChkTagGroup,
};
