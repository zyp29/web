import { Layout } from 'antd';
import './index.less';
import WebHeader from '../WebHeader';
import WebFooter from '../WebFooter';
const { Header, Footer, Content } = Layout;

const DefaultLayout = (props) => {

    return (
        <Layout>
            <Header>
                <WebHeader />
            </Header>
            <Content>
                {props.children}
            </Content>
            <Footer>
                <WebFooter />
            </Footer>
        </Layout>
    )

}

export default DefaultLayout;