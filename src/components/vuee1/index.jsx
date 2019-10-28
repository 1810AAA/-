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
          <Panel header="什么是Vue" key="1" style={customPanelStyle}>
            <p>
              一套构建用户界面的 渐进式框架 Vue
              的核心库只关注视图层，并且非常容易学习
              Vue是MVVM模式轻量级，渐进式的框架 特点就是 双向数据绑定
            </p>
          </Panel>
          <Panel header="vue常见指令" key="2" style={customPanelStyle}>
            <p>v-if是条件渲染指令，它根据表达式的真假来删除和插入元素</p>
            <p>v-for指令基于一个数组渲染一个列表，它和JavaScript的遍历语法相似</p>
            <p>v-bind 指令可以在其名称后面带一个参数，中间放一个冒号隔开</p>
            <p>v-model让表单元素和数据实现双向绑定</p>
          </Panel>
          <Panel header="事件修饰符" key="3" style={customPanelStyle}>
            <p>@click.stop：阻止点击事件的传播（往上传播和往下传播都会被阻止</p>
            <p>@submit.prevent：阻止点击提交按钮时的默认行为（阻止事件的默认行为）</p>
          </Panel>
          <Panel header="什么是组件" key="4" style={customPanelStyle}>
            <p>
            组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码
    组件是自定义元素（对象）
            </p>
          </Panel>
          <Panel header="子组件向父组件传值" key="5" style={customPanelStyle}>
           <p>在子组件中使用vm.$emit(事件名,数据)触发一个自定义事件，事件名自定义
 父组件在使用子组件的地方监听子组件触发的事件，并在父组件中定义方法，用来获取数据
     总结：子组件通过events给父组件发送消息，实际上就是子组件把自己的数据发送到父组件</p>
          </Panel>
          <Panel header="父组件向子组件传值" key="6" style={customPanelStyle}>
           <p>在调用子组件时，绑定想要获取的父组件中的数据
在子组件内部，使用props选项声明获取的数据，即接收来自父组件的数据
     总结：父组件通过props向下传递数据给子组件
     注：组件中的数据共有三种形式：data、props、computed</p>
          </Panel>
          <Panel header="非父子组件之间传值" key="7" style={customPanelStyle}>
         <p> 非父子组件间的通信，可以通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件</p>
         <p>var Event=new Vue();</p>
         <p> Event.$emit(事件名,数据);</p>
         <p> Event.$on(事件名,data => {});</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}
