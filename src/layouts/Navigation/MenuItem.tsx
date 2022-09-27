/**
 * @fileoverview Defines MenuItem.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import NextLink from 'next/link';

export type Props = {
  href: string;
  children: React.ReactNode;
  isExternal: boolean;
};

export const Component: React.FunctionComponent<Props> = ({
  href,
  children,
  isExternal = false,
}: Props): React.ReactElement => {
  if (isExternal)
    return (
      <Chakra.MenuItem as={Chakra.Link} href={href}>
        {children}
      </Chakra.MenuItem>
    );
  return (
    <NextLink href={href} passHref>
      <Chakra.MenuItem as={Chakra.Link}>{children}</Chakra.MenuItem>
    </NextLink>
  );
};
