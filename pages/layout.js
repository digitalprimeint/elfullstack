import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    ContactsOutlined,
    UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
import styles from '../styles/Home.module.css';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Inicio', '1', <UserOutlined />),
    getItem('Servicios', '2', <DesktopOutlined />),
    getItem('Contactar', '3', <ContactsOutlined />),
];

const LayoutDesign = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className={styles.logo}>
                    <a href="">
                        <h3>elfullstack.com</h3>
                        <p>Dev+Ops+Data</p>
                    </a>
                </div>
                <Menu theme='dark' defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout
                style={{
                    backgroundColor: "#303030"
                }}>
                <Content
                    style={{
                        margin: '0 16px'
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer className={styles.footer}>
                    elfullstack.com © 2022
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutDesign;