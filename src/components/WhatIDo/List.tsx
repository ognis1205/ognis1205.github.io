/**
 * @fileoverview Defines List.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ListItem from './ListItem';

export type Props = {
  items: ListItem.Props[];
};

export const Component: React.FunctionComponent<Props> = ({
  items,
}: Props): React.ReactElement => {
  return (
    <>
      <Chakra.Heading as="h3" variant="section-title">
        Activities ☻
      </Chakra.Heading>
      <Chakra.List>
        {items.map(({ href, icon, children }, i) => {
          return (
            <ListItem.Component key={i} href={href} icon={icon}>
              {children}
            </ListItem.Component>
          );
        })}
      </Chakra.List>
    </>
  );
};
