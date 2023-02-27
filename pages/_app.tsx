//  LIB
import { RecoilRoot, useRecoilValue, RecoilEnv } from "recoil";
import { CubeProvider } from "@cubejs-client/react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
//  UTIL
import DebugObserver from "util/debug/DebugObserver";
//  API
import cubejsApi from "api/cubeApi/config";
//  COMPONENT
import Header from "component/header/Header";
import Footer from "component/footer/Footer";
//  STYLE
import "../styles/globals.css";
import { atomThemeColor } from "store/theme/themeState";
import { createTheme } from "theme/index";
import { useMemo } from "react";

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <DebugObserver />
      <Main>
        <Component {...pageProps} />
      </Main>
    </RecoilRoot>
  );
}

const Main = ({ children }) => {
  const currentTheme = useRecoilValue(atomThemeColor);
  const theme = useMemo(() => {
    return createTheme(currentTheme);
  }, [currentTheme]);

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Flex
        flexWrap="wrap"
        flexDirection="column"
        h="100vh"
        overflow="hidden"
        bgColor="primary.main.bg"
      >
        <Header />
        <Flex flex="1" w="100%" overflow="hidden">
          <CubeProvider cubejsApi={cubejsApi}>{children}</CubeProvider>
        </Flex>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
