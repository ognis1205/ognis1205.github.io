/**
 * @fileoverview Defines Toggler.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ChakraIcons from '@chakra-ui/icons';
import * as FramerMotion from 'framer-motion';

export const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => {
  const { toggleColorMode } = Chakra.useColorMode();

  const initial = Chakra.useBreakpointValue({
    base: { y: 0, opacity: 0 },
    md: { y: -20, opacity: 0 },
  });

  const animate = Chakra.useBreakpointValue({
    base: { y: 0, opacity: 1 },
    md: { y: 0, opacity: 1 },
  });

  const exit = Chakra.useBreakpointValue({
    base: { y: 0, opacity: 0 },
    md: { y: 20, opacity: 0 },
  });

  return (
    <FramerMotion.AnimatePresence exitBeforeEnter initial={false}>
      <FramerMotion.motion.div
        style={{ display: 'inline-block' }}
        key={Chakra.useColorModeValue('light', 'dark')}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={{ duration: 0.2 }}
      >
        <Chakra.IconButton
          aria-label="Toggle theme"
          colorScheme={Chakra.useColorModeValue('blue', 'yellow')}
          icon={Chakra.useColorModeValue(
            <ChakraIcons.MoonIcon />,
            <ChakraIcons.SunIcon />
          )}
          onClick={toggleColorMode}
        />
      </FramerMotion.motion.div>
    </FramerMotion.AnimatePresence>
  );
};
