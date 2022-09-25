/**
 * @fileoverview Defines LinkList.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as ListItem from './ListItem';

export type Props = {
  items: ListItem.Props[];
};

export const Component: React.FunctionComponent<Props> = ({
  items,
}: Props): React.ReactElement => (
  <>
    {items.map(({ title, year, children }, i) => {
      return (
        <ListItem.Component key={i} title={title} year={year}>
          {children}
        </ListItem.Component>
      );
    })}
  </>
);
