/**
 * @fileoverview Defines List.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import styled from '@emotion/styled';
import * as ListItem from './ListItem';
import * as Timeline from '@/utils/timeline';

export type Props = {
  items: ListItem.Props[];
};

const Container = styled.div`
  margin: 1rem 0;
  margin-left: 2px;
  padding: 1rem 0;
`;

const Group = styled.div`
  position: relative;
`;

export const Component: React.FunctionComponent<Props> = ({
  items,
}: Props): React.ReactElement => {
  const groups = Timeline.groupByKey(items, (item) =>
    Number(item.date.slice(0, 4))
  );

  return (
    <Container>
      {groups.map((group) => {
        const [year, items] = group;
        return (
          <Group key={`group-${year}`}>
            <Chakra.Heading
              as="h4"
              fontSize={20}
              textAlign="center"
              m={6}
              p={3}
            >
              {year}
            </Chakra.Heading>
            {items.map((item, i) => (
              <ListItem.Component
                key={i}
                date={item.date}
                title={item.title}
                content={item.content}
                action={item.action}
                url={item.url}
                src={item.src}
              />
            ))}
          </Group>
        );
      })}
    </Container>
  );
};
