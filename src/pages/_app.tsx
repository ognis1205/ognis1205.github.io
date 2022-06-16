/**
 * @fileoverview Defines Home component.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as NextApp from 'next/app';
import * as Chakra from '@chakra-ui/react';
import * as FramerMotion from 'framer-motion';
import * as ChakraConfig from '@/config/chakra';
import * as Layout from '@/components/layout';
import * as Misc from '@/components/misc';
import 'focus-visible/dist/focus-visible';
import '@/assets/styles/reset.css';

const Home: React.FC<NextApp.AppProps> = ({
  Component,
  pageProps,
  router,
}: NextApp.AppProps) => {
  const colorModeManager =
    pageProps && typeof pageProps.cookies === 'string'
      ? Chakra.cookieStorageManager(pageProps.cookies)
      : Chakra.localStorageManager;

  return (
    <Chakra.ChakraProvider
      theme={ChakraConfig.theme}
      colorModeManager={colorModeManager}
    >
      <Misc.Fonts />
      <Layout.Main router={router}>
        <FramerMotion.AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </FramerMotion.AnimatePresence>
      </Layout.Main>
    </Chakra.ChakraProvider>
  );
};

export default Home;
