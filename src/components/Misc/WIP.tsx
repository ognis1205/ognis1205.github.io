/**
 * @fileoverview Defines WIP.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import NextLink from 'next/link';

export const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <>
    <Chakra.Heading as="h1">Work in progress</Chakra.Heading>
    <Chakra.Text>
      The page you&apos;re looking for is planned to deliver in the near future.
    </Chakra.Text>
    <Chakra.Divider my={6} />
    <Chakra.Box my={6} textAlign="center">
      <NextLink href="/" passHref>
        <Chakra.Button colorScheme="teal">Return to home</Chakra.Button>
      </NextLink>
    </Chakra.Box>
  </>
);
