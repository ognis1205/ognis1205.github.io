/**
 * @fileoverview Defines LinkList.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as LinkItem from './LinkItem';

export type Props = {
  path: string;
  items: LinkItem.Props[];
};

export const Component: React.FunctionComponent<Props> = ({
  path,
  items,
}: Props): React.ReactElement => {
  return (
    <Chakra.Stack
      direction={{ base: 'column', md: 'row' }}
      display={{ base: 'none', md: 'flex' }}
      width={{ base: 'full', md: 'auto' }}
      alignItems="center"
      flexGrow={1}
      mt={{ base: 4, md: 0 }}
    >
      {items.map(({ href, children, ...props }, i) => {
        return (
          <LinkItem.Component key={i} href={href} path={path} {...props}>
            {children}
          </LinkItem.Component>
        );
      })}
    </Chakra.Stack>
  );
};
