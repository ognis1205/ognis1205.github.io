/**
 * @fileoverview Defines LinkItem.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import NextLink from 'next/link';

export type Props = Chakra.LinkProps & {
  path?: string;
};

export const Component: React.FunctionComponent<Props> = ({
  href,
  path,
  target,
  children,
  ...props
}: Props): React.ReactElement => {
  const active = path === href;

  const inactiveColor = Chakra.useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <NextLink href={href} passHref scroll={false}>
      <Chakra.Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Chakra.Link>
    </NextLink>
  );
};
