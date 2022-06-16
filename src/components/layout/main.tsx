/**
 * @fileoverview Defines main layout.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as NextApp from 'next/app';
import * as Chakra from '@chakra-ui/react';
import Head from 'next/head';
import * as Navigation from '@/components/navigation';
import * as Footer from '@/components/layout/footer';
import * as MNIST from '@/components/mnist';

export type Props = {
  children: React.ReactNode;
  router: NextApp.AppProps['router'];
};

export const Component: React.FunctionComponent<Props> = ({
  children,
  router,
}: Props): React.ReactElement => {
  return (
    <Chakra.Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Shingo's homepage" />
        <meta name="author" content="Shingo OKAWA" />
        <meta name="author" content="ognis1205" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Shingo OKAWA" />
        <meta name="og:title" content="Shingo OKAWA" />
        <meta property="og:type" content="website" />
        <title>Shingo OKAWA - Homepage</title>
      </Head>
      <Navigation.NavBar path={router.asPath} />
      <Chakra.Container maxW="container.md" pt={14}>
        <MNIST.Dice />
        {children}
        <Footer.Component />
      </Chakra.Container>
    </Chakra.Box>
  );
};
