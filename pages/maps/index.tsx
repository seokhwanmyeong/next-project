//  Lib
import { Flex } from "@chakra-ui/react";
//  Components
import SementicSearchEngine from "component/sementicMapLayer/SementicSearchEngine";
import SementicMap from "component/sementicMapLayer/SementicMap";
import SementicViewer from "component/sementicMapLayer/SementicViewer";
import BaseAreaProvider from "component/sementicMapLayer/filter/BaseAreaProvider";

const Maps = () => {
  return (
    <Flex w="inherit" h="inherit" flexDirection="column">
      <Flex
        flex="1"
        flexDirection="row"
        position="relative"
        w="inherit"
        overflow="hidden"
      >
        <BaseAreaProvider>
          <SementicSearchEngine />
          <SementicMap />
          <SementicViewer />
        </BaseAreaProvider>
      </Flex>
    </Flex>
  );
};

export default Maps;
