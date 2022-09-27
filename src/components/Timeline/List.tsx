/**
 * @fileoverview Defines List.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
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

const Group = styled.div``;

const Year = styled.div`
  position: sticky;
  top: 6px;
  z-index: 1;
  margin-left: -10px;
  padding: 0.3em 0;
  width: 78px;
  text-align: center;
  font-weight: 700;
  border-radius: 2.5em;
`;

const Line = styled.div`
  margin: 1em 0;
  margin-left: 2px;
  padding: 1em 0;
  border-left: solid 2px rgba(115, 125, 130, 0.4);
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
            <Year>{year}</Year>
            <Line>
              {items.map((item, i) => (
                <ListItem.Component
                  key={i}
                  date={item.date}
                  title={item.title}
                  action={item.action}
                  url={item.url}
                />
              ))}
            </Line>
          </Group>
        );
      })}
    </Container>
  );
};
