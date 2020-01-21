import '../styles/styles.scss'
import Head from 'next/head';
import ReactGA from 'react-ga';
import getPath from '../utils/getPath'

const NewHead = () => {
    ReactGA.initialize('UA-108299328-6');
    const path = getPath();
    ReactGA.pageview(path);
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,700&display=swap" rel="stylesheet" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
        </>
    );
}

export default NewHead;
