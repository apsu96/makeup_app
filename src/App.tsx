import "./App.css";
import { Layout } from "antd";
import SearchForm from "./SearchForm";

function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout className="layout">
      <Header className="header">
        <p className="header_text">Create your makeup kit!</p>
      </Header>
      <Content className="content">
        <SearchForm />
      </Content>
    </Layout>
  );
}

export default App;
