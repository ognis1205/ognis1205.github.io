/**
 * @fileoverview Defines List.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import styled from '@emotion/styled';
import * as ListItem from './ListItem';
import * as Timeline from '@/utils/timeline';
import * as DOM from '@/utils/dom';

export type Props = {
  items: ListItem.Props[];
};

const Container = styled.div`
  margin: 1rem 0;
  margin-left: 2px;
  padding: 1rem 0;
`;

export const Component: React.FunctionComponent<Props> = ({
  items,
}: Props): React.ReactElement => {
  const stickyOffset = ((): string | undefined => {
    if (DOM.isDefined()) {
      const offset = document.getElementById('navbar')?.offsetHeight;
      return offset ? `${offset}px` : undefined;
    }
    return undefined;
  })();

  const groups = Timeline.groupByKey(items, (item) => item.date.slice(0, 7));

  return (
    <Container>
      {groups.map((group) => {
        const [year, items] = group;
        return (
          <Chakra.Box key={`group-${year}`} display={{ md: 'flex' }}>
            <Chakra.Box flex={1} mr={2}>
              <Chakra.Heading
                as="h4"
                fontSize={20}
                my={{ sm: 3, md: 0 }}
                position="sticky"
                top={stickyOffset}
              >
                {year}
              </Chakra.Heading>
            </Chakra.Box>
            <Chakra.Box flex={5}>
              {items.map((item, i) => (
                <ListItem.Component
                  key={i}
                  isLast={i === items.length - 1}
                  type={item.type}
                  content={item.content}
                  contentSnippet={item.contentSnippet}
                  creator={item.creator}
                  isoDate={item.isoDate}
                  link={item.link}
                  pubDate={item.pubDate}
                  title={item.title}
                  date={item.date}
                  imgSrc={item.imgSrc}
                />
              ))}
            </Chakra.Box>
          </Chakra.Box>
        );
      })}
    </Container>
  );
};
