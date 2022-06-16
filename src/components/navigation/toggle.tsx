/**
 * @fileoverview Defines theme toggle.
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

  return (
    <FramerMotion.AnimatePresence exitBeforeEnter initial={false}>
      <FramerMotion.motion.div
        style={{ display: 'inline-block' }}
        key={Chakra.useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
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
