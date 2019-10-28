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
          <Panel header="find" key="1" style={customPanelStyle}>
            <p>
              检测 str 是否包含在 mystr中，如果是返回开始的索引值，否则返回-1
            </p>
            <p>mystr.find(str, start=0, end=len(mystr))</p>
          </Panel>
          <Panel header="index" key="2" style={customPanelStyle}>
            <p>跟find()方法一样，只不过如果str不在 mystr中会报一个异常.</p>
          </Panel>
          <Panel header="split" key="3" style={customPanelStyle}>
            <p>
              以 str 为分隔符切片 mystr，如果 maxsplit有指定值，则仅分隔
              maxsplit 个子字符串
            </p>
          </Panel>
          <Panel header="LowerCase" key="4" style={customPanelStyle}>
            <p>转换 mystr 中所有大写字符为小写</p>
          </Panel>
          <Panel header="UpperCase" key="5" style={customPanelStyle}>
            <p> 转换 mystr 中所有大写字符为大写</p>
          </Panel>
          <Panel header="join" key="6" style={customPanelStyle}>
            <p>mystr 中每个元素后面插入str,构造出一个新的字符串</p>
          </Panel>
          <Panel header="toString" key="7" style={customPanelStyle}>
            <p>将其他类型装换为字符串</p>
          </Panel>
          <Panel header="未完待续..." key="7" style={customPanelStyle}>
          
          </Panel>
        </Collapse>
      </div>
    );
  }
}
