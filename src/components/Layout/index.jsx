import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
// 左侧一级导航的数据
const leftNav = [

 
  { iconType: 'read', text: '初级笔记', id: 'Primary' },
  { iconType: 'save', text: '中级笔记', id: 'Intermediate' },
  { iconType: 'switcher', text: 'react高级笔记', id: 'Senior' },
  
 
];
export default class Mylayout extends React.Component {
  constructor() {
    super();
    this.state = {
      // 控制展开收起
      collapsed: false
    };
  }
  // 切换的方法
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    /*
    Layout:容器组件，包裹组件
    Sider：侧边栏，放导航的
    Header：头部组件
    Menu：做折叠导航的组件
    Content：内容展示组件【重要】
    */
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {leftNav.map(item => {
              return (
                <Menu.Item
                  key={item.id}
                  onClick={() => {
                    this.props.getsoudata(item.id);
                  }}
                >
                  <Icon type={item.iconType} />
                  <span>{item.text}</span>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            {/* 隐式渲染传递进来的组件 */}
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
