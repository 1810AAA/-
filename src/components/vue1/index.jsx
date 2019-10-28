import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div>
        <h3>vue是什么? </h3>
        <p>
          一套构建用户界面的 渐进式框架 Vue
          的核心库只关注视图层，并且非常容易学习
          Vue是MVVM模式轻量级，渐进式的框架 特点就是 双向数据绑定，
        </p>
        <br />
        <br />
        <h3>vue常见指令</h3>
        <p>v-if是条件渲染指令，它根据表达式的真假来删除和插入元素</p>
        <p>v-for指令基于一个数组渲染一个列表，它和JavaScript的遍历语法相似</p>
        <p>v-bind 指令可以在其名称后面带一个参数，中间放一个冒号隔开</p>
        <br />
        <br />
        <h3>事件修饰符</h3>
        <p>@click.stop：阻止点击事件的传播（往上传播和往下传播都会被阻止）</p>
        <p>
          @submit.prevent：阻止点击提交按钮时的默认行为（阻止事件的默认行为）
        </p>
        <br/>
        <br/>

      </div>
    );
  }
}
