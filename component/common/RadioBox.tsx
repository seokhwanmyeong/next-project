//  Lib
import { Radio, RadioGroup, Flex } from "@chakra-ui/react";
//  Components
import Tag from "component/common/Tag";

type RadioProps = {
  radioProps?: {};
  onChange: any;
  value: any;
  fieldKey: string;
  values?: { text: string; value: string | number }[];
  variant?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
};

const RadioBox = ({
  radioProps,
  onChange,
  value,
  fieldKey,
  values,
  variant,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  isRequired = false,
}: RadioProps) => {
  return (
    <RadioGroup
      key={`radioG=${fieldKey}`}
      name={fieldKey}
      onChange={(value: any) => onChange(value)}
      value={value}
      variant={variant}
      display="flex"
      alignItems="center"
      gap={2}
      {...radioProps}
    >
      {values &&
        values.map((li: { text: string; value: string }) => (
          <Radio
            key={`radio-${li.value}`}
            value={li.value}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
          >
            {li.text}
          </Radio>
        ))}
    </RadioGroup>
  );
};

const RadioTagGroup = ({
  radioData,
  radioValue,
  isDisabled = false,
  onChange,
  variant,
}: {
  radioData: { text: any; value: string }[];
  radioValue: string;
  isDisabled?: boolean;
  onChange: (value: any) => void;
  variant?: string;
}) => {
  return (
    <RadioGroup
      value={radioValue}
      isDisabled={isDisabled}
      onChange={onChange}
      variant={variant}
    >
      <Flex w="100%" flexWrap="wrap" gap="1rem">
        {radioData.map(({ text, value }: { text: string; value: any }) => (
          <Radio
            key={`chk-${text}-${value}`}
            variant="withTag"
            isDisabled={isDisabled}
            value={value}
          >
            <Tag
              variant="checkbox"
              key={`tag-${text}-${value}`}
              text={text ?? ""}
              hasBtn={false}
              tagBtn={true}
              isChecked={radioValue === value}
            />
          </Radio>
        ))}
      </Flex>
    </RadioGroup>
  );
};

export { RadioBox, type RadioProps, RadioTagGroup };
