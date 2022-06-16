/**
 * @fileoverview Defines footer.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';

export const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <Chakra.Flex justify="center" align="center" opacity={0.4} fontSize="sm">
    &copy; {new Date().getFullYear()} Shingo OKAWA. All Rights Reserved.
  </Chakra.Flex>
);
