import { Icon, createIcon, Flex } from "@chakra-ui/react";

const IconDownload = (iconProps: any) => {
  return (
    <Icon
      viewBox="0 0 16 16"
      boxSize="2rem"
      fill="primary.main.bg"
      {...iconProps}
    >
      <path
        fill="currentColor"
        d="M12.666 12.5H3.333a.667.667 0 0 0 0 1.333h9.333a.667.667 0 1 0 0-1.333Z"
      />
      <path
        fill="currentColor"
        d="M2.666 11.833v1.334a.667.667 0 1 0 1.333 0v-1.334a.667.667 0 1 0-1.333 0ZM12 11.833v1.334a.667.667 0 0 0 1.333 0v-1.334a.667.667 0 1 0-1.333 0ZM7.998 10.5a.667.667 0 0 1-.386-.12L4.945 8.5a.667.667 0 1 1 .773-1.087l2.28 1.594L10.265 7.3a.667.667 0 0 1 .8 1.067l-2.667 2a.667.667 0 0 1-.4.133Z"
      />
      <path
        fill="currentColor"
        d="M7.999 9.167a.667.667 0 0 1-.667-.667V3.167a.667.667 0 0 1 1.333 0V8.5A.667.667 0 0 1 8 9.167Z"
      />
    </Icon>
  );
};

const IconFileAdd = (iconProps: any) => {
  return (
    <Icon
      viewBox="0 0 16 16"
      boxSize="2rem"
      fill="primary.main.bg"
      {...iconProps}
    >
      <path
        fill="currentColor"
        d="m13.16 6.053-3.627-4a.667.667 0 0 0-.494-.22H4.373A1.687 1.687 0 0 0 2.666 3.5v10a1.686 1.686 0 0 0 1.707 1.666h7.253a1.688 1.688 0 0 0 1.707-1.666v-7a.666.666 0 0 0-.174-.447Zm-3.827-2.22 1.826 2H9.826a.527.527 0 0 1-.493-.567V3.833Zm2.293 10H4.373a.353.353 0 0 1-.374-.333v-10a.353.353 0 0 1 .374-.334h3.626v2.1a1.86 1.86 0 0 0 1.807 1.9h2.193V13.5a.352.352 0 0 1-.373.333Z"
      />
      <path
        fill="currentColor"
        d="M9.333 9.167h-.666V8.5a.667.667 0 0 0-1.334 0v.667h-.666a.667.667 0 1 0 0 1.333h.666v.667a.667.667 0 1 0 1.334 0V10.5h.666a.667.667 0 1 0 0-1.333Z"
      />
    </Icon>
  );
};

export { IconDownload, IconFileAdd };
