import React, { Component } from 'react'

import { Menu, Icon} from 'antd';

import { Carousel } from 'antd';
//引入样式
import './index.css'

const { SubMenu } = Menu;
export default class Index extends Component {
    constructor(){
        super();
        this.state ={
            mode: 'inline',
            theme: 'light',
            current: 'mail',
            color:[
                {c:'#FF6A6A',id:1},
                {c:'#FAFAD2',id:2},
                {c:'#FF7F00',id:3},
                {c:'#00E5EE',id:4},
                {c:'#66CDAA',id:5},
                {c:'#FFD700',id:6},
                {c:'#A020F0',id:6},
                {c:'#32CD32',id:6},
                {c:'#00008B',id:6},
                {c:'#CDC1C5',id:6},
                {c:'#FFD700',id:6}
            ]
        }
    }
    //点击函数
    handleClick = e => {
      // console.log('click ', e);
      this.setState({
        current: e.key,
      });
    };
    //更换模式
    changeMode = value => {
        this.setState({
          mode: value ? 'vertical' : 'inline',
        });
      };
    //更换主体
      changeTheme = value => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
      };
     //改变头部字体颜色
      changeColor=()=>{
       this.forceUpdate()
       setTimeout(() => {
         this.changeColor()
      }, 500);
      }
      //提示信息
      joinOur=()=>{
        alert('优秀的程序员啊，欢迎加入我们的超级小分队，')
      }
      colorss=()=> Math.round(Math.random()*10)
     
      render() {
       const {onchangeconsts}=this.props

        return (
          
          <div>
              {/* 导航部分 */}
              <div>
             <img src={require("../Login/img/pig.jpg")} className="fws-img" />
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"      className='fws-top'>
        <Menu.Item key="mail" >
          <Icon type="mail" />
                我们的主页面
        </Menu.Item>
     
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
                 React知识点
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="setting:1" onClick={()=>onchangeconsts('Class')}>React初级</Menu.Item>
            <Menu.Item key="setting:2" onClick={()=>onchangeconsts('type')}>React中级</Menu.Item>
            <Menu.Item key="setting:3" onClick={()=>onchangeconsts('senior')}>React高级</Menu.Item>
          </Menu.ItemGroup>
    
        </SubMenu>
        <Menu.Item key="1" onClick={()=>onchangeconsts('question')}>
              问卷调查演示
        </Menu.Item>
        <Menu.Item key="2" onClick={()=>onchangeconsts('picture')}>
              选项卡的展示
        </Menu.Item>
        <Menu.Item key="3" onClick={()=>onchangeconsts('git')}>
         
             脚手架知识总结
          
        </Menu.Item>
        <Menu.Item key="4" onClick={()=>onchangeconsts('vuee1')}>
       vue知识点总结
         
        </Menu.Item>
        <Menu.Item key="5">
        <a href="https://www.cnblogs.com/ls1997/p/10527380.html" target="_blank" rel="noopener noreferrer">
            字符串总结
          </a>
         
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="https://www.jianshu.com/p/9d7cb7d3cca6" target="_blank" rel="noopener noreferrer">
            前端的发展历史和未来走向
          </a>
        </Menu.Item>
      </Menu>
      </div>
      <div className='fws-bai'></div>
            <ul className='name'>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>欢</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>迎</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>来</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>到</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>我</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>们</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>小</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>分</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>队</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>之</li>
              <li key={this.state.color.id} style={{color:this.state.color[this.colorss()].c}}>家</li>
            </ul>
            <span className='span' onClick={(event=>{this.changeColor();this.joinOur()})}>点击有惊喜哦</span>
            <br/>
            <br/>
            {/* 展示内容 */}
            <div className='fws-text'>
                {/* 内容部分 */}
                {this.props.children}
            </div>
            <br/>
            {/* 轮播图 */}
            <div>
                <Carousel autoplay>
                <div>
          <img src={require('../Login/img/01.jpg')} className="ysb-img-001" />
          </div>
          <div>
          <img src={require('../Login/img/02.jpg')} className="ysb-img-001"/>
          </div>
          <div>
          <img src={require('../Login/img/01.jpg')} className="ysb-img-001" />
          </div>
          <div>
          <img src={require('../Login/img/02.jpg')} className="ysb-img-001"/>
          </div>
                 </Carousel>
            </div>
            <div>
            {/* <Switch onChange={this.changeMode} /> 更换模式
            <span className="ant-divider" style={{ margin: '0 1em' }} />
            <Switch onChange={this.changeTheme} /> 更换主体 */}
            </div>
            <br />

            {/* 导航部分
            <Menu 
              style={{ width: 256 , height : 1500}}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode={this.state.mode}
              theme={this.state.theme}
            >
           
              <SubMenu 
                key="sub1"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>react</span>
                  </span>
                }
              >
                <Menu.Item key="3" onClick={()=>onchangeconsts('Class')}>react初级</Menu.Item>
                <Menu.Item key="4" onClick={()=>onchangeconsts('type')}><div >react中级</div></Menu.Item>
                <Menu.Item key="5" onClick={()=>onchangeconsts('senior')}>react高级</Menu.Item>
              </SubMenu>
              <Menu.Item key="1" onClick={()=>onchangeconsts('question')}>
                <Icon type="mail" />
                 问卷调查
              </Menu.Item>
            </Menu> */}

            
          
          </div>
        );
      }
    }