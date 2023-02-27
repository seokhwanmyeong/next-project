//  Components
import {
  Tag as ChakraTag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";

type TagProps = {
  text: string;
  variant?: string;
  onClick?: any;
  tagProps?: any;
  hasBtn?: boolean;
  tagBtn?: boolean;
  isChecked?: boolean;
};

const Tag = (props: TagProps) => {
  const {
    text,
    variant = "subtle",
    onClick,
    tagProps,
    hasBtn = false,
    tagBtn = false,
    isChecked = false,
  } = props;

  return (
    <ChakraTag
      variant={variant}
      onClick={tagBtn ? onClick : undefined}
      bgColor={isChecked ? "primary.main.bg" : "primary.main.hover"}
      cursor={tagBtn ? "pointer" : "default"}
      p="0.5rem 1rem"
    >
      <TagLabel color="primary.main.font">{text}</TagLabel>
      {hasBtn && <TagCloseButton onClick={onClick} />}
    </ChakraTag>
  );
};

export default Tag;
