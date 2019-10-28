import React, { Component } from 'react';
import Register from './register';
import Login from './login';
//底部组件
import Button from '../components/button/button'


//受控组件和非受控组价
import ComponentType from '../components/componentType';

import Layzy from'../layzy/index' //结构组件
import Content1 from '../components/primary/primary'//初级内容
import Content2 from'../components/intermediate/index'  // 中级内容
import Content3 from '../components/senior/index'//高级内容
import Question from '../components/question/index'//表单
import Picture from '../components/picture/index' //图片切换
import Git from '../components/git/index'
import Vuee from '../components/vuee1/index'
import String1 from '../components/string/index'
class Index extends Component {
  constructor() {
    super();
    this.state = {
      isCom: window.location.hash.slice(1) || 'Register',
      const:''
    };
    window.onhashchange = () => {
      this.setState({
        isCom: window.location.hash.slice(1)
      });
    };
  }
// 收听子组件传递数据
getSouData = id => {
  window.location.hash = id;
};
//改变consts的值
 changeconsts =(id)=>{
   this.setState({
    consts :id
   })
  console.log(id)
 }
  //获取返回组件的状态
  getstatus = data => {
    window.location.hash = data;
  };
  render() {
    let Dom = '';
    switch (this.state.consts) {
      case 'Register':
        Dom = <Register getstatus={this.getstatus} />;
        break;
      case 'Login':
        Dom = <Login getstatus={this.getstatus} />;
        break;
      case 'Class' :
       Dom = <Content1 />;
       break;
       case 'type' :
       Dom = <Content2 />;
       break;
        case 'senior' :
        Dom = <Content3/>;
        break;
        case 'question':
          Dom = <Question/>
        break;
        case 'picture':
          Dom = <Picture/>
          break;
          case 'git':
          Dom =<Git/>
          break;
          case 'vuee1':
            Dom =<Vuee/>
        break;
        case 'string':
          Dom =<String1/>

       
    }
    return (
      <React.Fragment>
        {this.state.isCom == 'Register' ? (
          <Register getstatus={this.getstatus} />
        ) : this.state.isCom == 'Login' ? (
          <Login getstatus={this.getstatus} />
        ) : (
          <Layzy onchangeconsts={this.changeconsts}>
           
           {Dom}
        </Layzy>
        )}
        {/* <Button/> */}
      </React.Fragment>
    );
  }
}
export default Index;
