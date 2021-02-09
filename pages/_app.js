import PageComponent from "../components/shell/page-component";
import "../styles/_main.scss";

const MyApp = ({ Component, pageProps }) => {
    return <PageComponent Component={Component} pageProps={pageProps} />
}

export default MyApp;