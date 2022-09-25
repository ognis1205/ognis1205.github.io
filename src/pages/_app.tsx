/**
 * @fileoverview Defines Home component.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as NextApp from 'next/app';
import * as Chakra from '@chakra-ui/react';
import * as FramerMotion from 'framer-motion';
import * as ChakraConfig from '@/config/chakra';
import * as Layouts from '@/components/Layouts';
import * as Misc from '@/components/misc';
import 'focus-visible/dist/focus-visible';
import '@/assets/styles/reset.css';

const Component: React.FC<NextApp.AppProps> = ({
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
      <Layouts.Main router={router}>
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
      </Layouts.Main>
    </Chakra.ChakraProvider>
  );
};

export function reportWebVitals(metric: NextApp.NextWebVitalsMetric) {
  console.log(metric);
}

export default Component;
