import PageComponent from "../components/shell/page-component";

const MyApp = ({ Component, pageProps }) => {
    return <PageComponent Component={Component} pageProps={pageProps} />
}

export default MyApp;