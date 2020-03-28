import React from "react";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'
const FooterPage = () => {
  return (
    <Footer
    columns={[
      {
        icon: (
          <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
        ),
        title: 'CS4474 Group 2',
        url: 'https://yuque.com',
        description: '知识创作与分享工具',
        openExternal: true,
      },
    ]}
    bottom="Made with ❤️ by Group 2 CS 4474"
  />
  )
}

export default FooterPage;