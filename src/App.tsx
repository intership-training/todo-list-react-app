import React from 'react';
import {Layout} from "antd";
import {Display} from "./pages/Display";
import './App.css';

const {
    Header,
    Content,
    Footer
} = Layout
function App() {
      return (
        <Layout>
            <Header className="header">
                Intern Profile
            </Header>
            <Content className="template">
                <Display/>
            </Content>
            <Footer className="footer"/>
        </Layout>
      );
}

export default App;
