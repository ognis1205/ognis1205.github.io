/**
 * @fileoverview Defines ListItem.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import * as Timeline from '@/utils/timeline';
import * as RSS from '@/utils/rss';
import * as Instagram from './Instagram';
import * as Twitter from './Twitter';
import * as Unknown from './Unknown';

export type Props = RSS.Feed;

const getLink = (type: RSS.FeedType): React.ReactElement => {
  if (type === RSS.FeedType.TWITTER) {
    return (
      <NextLink href="https://twitter.com" passHref>
        <Chakra.Link color="" fontWeight="bold">
          Twitter
        </Chakra.Link>
      </NextLink>
    );
  } else if (type === RSS.FeedType.INSTAGRAM) {
    return (
      <NextLink href="https://www.instagram.com/" passHref>
        <Chakra.Link color="" fontWeight="bold">
          Instagram
        </Chakra.Link>
      </NextLink>
    );
  } else {
    return (
      <NextLink href="#" passHref>
        <Chakra.Link color="" fontWeight="bold">
          N/A
        </Chakra.Link>
      </NextLink>
    );
  }
};

const renderItem = (feed: RSS.Feed): React.ReactElement => {
  if (feed.type === RSS.FeedType.TWITTER) {
    return <Twitter.Component {...feed} />;
  } else if (feed.type === RSS.FeedType.INSTAGRAM) {
    return <Instagram.Component {...feed} />;
  } else {
    return <Unknown.Component {...feed} />;
  }
};

export const Component: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const bgColor = Chakra.useColorModeValue(
    'rgba(0, 0, 0, 1)',
    'rgba(255, 255, 255, 1)'
  );

  const bdColor = Chakra.useColorModeValue('#ECE1D3', '#202023');

  const Dot = styled.span`
    position: absolute;
    border: 3px solid ${bdColor};
    width: 14px;
    height: 14px;
    border-radius: 50%;
    left: -6px;
    background: ${bgColor};
  `;

  const lineStyle = {
    display: 'block',
    content: `""`,
    position: 'absolute',
    top: '7px',
    bottom: '-7px',
    width: '2px',
    height: '100%',
    background: Chakra.useColorModeValue('blackAlpha.500', 'whiteAlpha.500'),
  };

  return (
    <Chakra.Box style={{ position: 'relative' }} _before={lineStyle}>
      <Chakra.Box
        display="flex"
        as="time"
        fontSize={14}
        alignItems="center"
        pl={3}
        pb={3}
      >
        <Dot />
        <Chakra.Text fontSize={12} opacity={0.4}>
          Published a post on {getLink(props.type)}{' '}
          {Timeline.formatDate(props.date)}
        </Chakra.Text>
      </Chakra.Box>
      {renderItem(props)}
    </Chakra.Box>
  );
};
