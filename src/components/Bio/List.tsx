/**
 * @fileoverview Defines List.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ListItem from './ListItem';

export type Props = {
  heading: string;
  items: ListItem.Props[];
};

export const Component: React.FunctionComponent<Props> = ({
  heading,
  items,
}: Props): React.ReactElement => (
  <>
    <Chakra.Heading as="h3" variant="section-title">
      {heading}
    </Chakra.Heading>
    {items.map(({ organization, title, year, description }, i) => {
      return (
        <ListItem.Component
          key={i}
          organization={organization}
          title={title}
          year={year}
          description={description}
        />
      );
    })}
  </>
);
