import { Layout, Menu, message, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { useStore } from '@/store'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const { Header, Sider } = Layout

const GeekLayout = () => {
  const { pathname } = useLocation()
  const { userStore, loginStore } = useStore()
  const navigate = useNavigate()
  useEffect(() => {
    try {
      userStore.getUserInfo()
    } catch {}
  }, [userStore])
  const outInfo = () => {
    loginStore.loginOut()
    navigate('/login')
    message.success('退出成功', 1)
  }
  const item = [
    { label: <Link to="/">数据概览</Link>, key: '/', icon: <HomeOutlined /> },
    {
      label: <Link to="/article">内容管理</Link>,
      key: '/article',
      icon: <DiffOutlined />,
    },
    {
      label: <Link to="/publish">发布文章</Link>,
      key: '/publish',
      icon: <EditOutlined />,
    },
  ]
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm
              title="是否确认退出？"
              okText="退出"
              cancelText="取消"
              onConfirm={outInfo}
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[pathname]}
            style={{ height: '100%', borderRight: 0 }}
            items={item}
          >
            {/* <Menu.Item icon={<HomeOutlined />} key="/"></Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="/article"></Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="/publish"></Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default observer(GeekLayout)
