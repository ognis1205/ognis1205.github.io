/**
 * @fileoverview Defines Home component.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as NextApp from 'next/app';
import Router from 'next/router';
import * as Chakra from '@chakra-ui/react';
import * as FramerMotion from 'framer-motion';
import * as ChakraConfig from '@/config/chakra';
import * as Main from '@/layouts/Main';
import * as Misc from '@/components/Misc';
import 'focus-visible/dist/focus-visible';
import '@/assets/styles/reset.css';

type SpinnerProps = {
  fadeIn: boolean;
};

const Spinner: React.FunctionComponent<SpinnerProps> = ({
  fadeIn,
}: SpinnerProps): React.ReactElement => (
  <Chakra.Fade in={fadeIn}>
    <Chakra.Spinner
      size="xl"
      position="absolute"
      left="50%"
      ml="calc(0px - var(--spinner-size) / 2)"
      mt="calc(0px - var(--spinner-size))"
    />
  </Chakra.Fade>
);

const Component: React.FC<NextApp.AppProps> = ({
  Component,
  pageProps,
  router,
}: NextApp.AppProps) => {
  const [isLoading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleStart = () => setLoading(true);

    const handleEnd = () => setLoading(false);

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleEnd);
    Router.events.on('routeChangeError', handleEnd);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleEnd);
      Router.events.off('routeChangeError', handleEnd);
    };
  }, []);

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
      <Main.Component router={router}>
        <Spinner fadeIn={isLoading} />
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
      </Main.Component>
    </Chakra.ChakraProvider>
  );
};

export function reportWebVitals(metric: NextApp.NextWebVitalsMetric) {
  console.log(metric);
}

export default Component;
