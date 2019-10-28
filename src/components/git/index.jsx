import React, { Component } from "react";
import { Collapse, Icon } from "antd";
const { Panel } = Collapse;
const customPanelStyle = {
  background: "#f7f7f7",
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: "hidden"
};
export default class index extends Component {
  render() {
    return (
      <div>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 0} />
          )}
        >
          <Panel header="淘宝镜像" key="1" style={customPanelStyle}>
            <p>
              设置 npm 的下载镜像 如果设置了 npm 指向淘宝镜像，则不需要安装了
              npm config set registry https://registry.npm.taobao.org
            </p>
          </Panel>
          <Panel header="全局安装react" key="2" style={customPanelStyle}>
            <p>npm i -g create-react-app</p>
          </Panel>
          <Panel header="查看版本" key="3" style={customPanelStyle}>
            <p>查看版本create-react-app -V</p>
          </Panel>
          <Panel header="创建项目" key="4" style={customPanelStyle}>
            <p>
              不要在C盘里创建，因为C盘是系统盘，它有权限保护，容易出问题，如果只有C盘把项目建立在‘文档’文件夹里
              create-react-app myreact
              如果创建项目时报错，说明网不好，或者是使用了yarn，卸载yarn，或者查看一下nodejs软件是不是直接安装在盘符的根目录了。如果nodejs安装在盘符根目录，卸载nodejs重新安装。
            </p>
          </Panel>
          <Panel header="运行项目" key="5" style={customPanelStyle}>
            <p>npm run start </p>
            <p>如果报错是webpack版本号不对等</p>
            <p>解决办法：运行npm run eject</p>
            <p>最后再运行启动就可以了</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}
