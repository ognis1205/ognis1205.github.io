/**
 * @fileoverview Defines 404.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import NextLink from 'next/link';

const NotFound: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <Chakra.Container>
    <Chakra.Heading as="h1">Not found</Chakra.Heading>
    <Chakra.Text>The page you&apos;re looking for was not found.</Chakra.Text>
    <Chakra.Divider my={6} />
    <Chakra.Box my={6} textAlign="center">
      <NextLink href="/" passHref>
        <Chakra.Button colorScheme="teal">Return to home</Chakra.Button>
      </NextLink>
    </Chakra.Box>
  </Chakra.Container>
);

export default NotFound;
