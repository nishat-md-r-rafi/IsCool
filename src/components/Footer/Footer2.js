import Footer from "rc-footer";
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';
import { render } from "react-dom";

import React from "react";
import { getDefaultNormalizer } from "@testing-library/react";

function Footer2(props) {
  return (
    <div>
      <Footer
        columns={[
          {
            icon: (
              <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
            ),
            title: "IsCool",
            url: "https://yuque.com",
            description: "知识创作与分享工具",
            openExternal: true,
          },
          {
            items: ["About Us", "Contact Us", "Our Business", "Our Plan"],
            openExternal: true,
          },
          {
            icon: (
              <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
            ),
            title: "语雀",
            url: "https://yuque.com",
            description: "知识创作与分享工具",
            openExternal: true,
          },
        ]}
        bottom="@IsCool copyright"
        theme="light"
        backgroundColor="pink"
      />
    </div>
  );
}

export default Footer2;
