import React from "react";
import ReactDOM from "react-dom/client";
import { renderToStaticMarkup } from "react-dom/server";
import { Flex, Button } from "@chakra-ui/react";

type Props = {};

const infoBoxMaker = (map: any, position: any) => {
  const testStyle = `
    padding: 5px 10px;
    color: #777777;
    border-radius: 10px;
    background-color: #ededed;
  `;

  const testInfo = [
    `<div class="iw_inner">`,
    `   <button style="${testStyle}">설정완료</button>`,
    `</div>`,
  ].join(``);

  class Test extends naver.maps.OverlayView {
    private content: string;

    constructor(options: any) {
      super();
      this.content = testInfo;
    }
  }

  return Test;
};

export default infoBoxMaker;
