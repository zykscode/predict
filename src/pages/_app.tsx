import '../styles/global.css';
import '../styles/style.scss';

import type { AppProps } from 'next/app';
import Head from 'next/dist/shared/lib/head';
import { ThemeProvider } from 'next-themes';

import LayoutWrapper from '@/components/LayoutWrapper';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" defaultTheme={'siteMetadata'}>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  </ThemeProvider>
);

export default MyApp;
