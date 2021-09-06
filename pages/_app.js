import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import getConfig from 'next/config';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '/styles/theme';
import '/styles/globals.css';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const { HOTPEPPER_API_KEY } = publicRuntimeConfig;
console.log("test"+JSON.stringify(publicRuntimeConfig));

const { APP_NAME } = publicRuntimeConfig;

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
        <title>{APP_NAME}</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
