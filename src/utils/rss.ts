/**
 * @fileoverview Defines RSS utilities.
 * @copyright Shingo OKAWA 2022
 */
import dayjs from 'dayjs';
import Parser from 'rss-parser';
import * as HTMLParser from 'node-html-parser';
import * as RSS from '@/config/rss';

const PARSER = new Parser();

const CORS_ANYWHERE = 'https://cors-anywhere-ognis1205.herokuapp.com';

export const FeedType = {
  TWITTER: 'twitter',
  INSTAGRAM: 'instagram',
  UNKNONW: 'unknown',
} as const;

export type FeedType = typeof FeedType[keyof typeof FeedType];

export type Feed = {
  type: FeedType;
  content: string;
  contentSnippet: string;
  creator: string;
  isoDate: string;
  link: string;
  pubDate: string;
  title: string;
  date: string;
  imgSrc?: string;
};

const getFeedType = (html: string): FeedType => {
  if (html.includes('twitter')) {
    return FeedType.TWITTER;
  } else if (html.includes('instagram')) {
    return FeedType.INSTAGRAM;
  } else {
    return FeedType.UNKNONW;
  }
};

const getImgSrc = (html: string): string => {
  const document = HTMLParser.parse(html);
  const img = document.querySelector('img');
  if (img?.rawAttrs) {
    return img?.rawAttrs
      ?.split(/(\s+)/)
      .filter((line) => line.startsWith('src='))
      .map((line) => line.replace(/^src=/gm, '').replace('"', ''))?.[0];
  }
  return undefined;
};

export const getFileContents = async (uri: string): Promise<Buffer> => {
  try {
    const res = await fetch(`${CORS_ANYWHERE}/${uri}`);
    const blob = await res.blob();
    const arrayBuffer = await blob.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } catch (e) {
    console.error(`Failed to fetch data from ${uri}: ${e}`);
    return Buffer.alloc(0);
  }
};

export const fetchFeedFrom = async (url: string): Promise<Feed[]> => {
  try {
    const feed = await PARSER.parseURL(`${CORS_ANYWHERE}/${url}`);
    if (!feed?.items?.length) return [];
    return feed.items
      .map(
        ({
          content,
          contentSnippet,
          creator,
          isoDate,
          link,
          pubDate,
          title,
        }) => {
          return {
            type: getFeedType(link),
            content: content,
            contentSnippet: contentSnippet,
            creator: creator,
            isoDate: isoDate,
            link: link,
            pubDate: pubDate,
            title: title.replace(/\n/g, ' '),
            date: dayjs(isoDate).format('YYYY-MM-DD'),
            imgSrc: getImgSrc(content),
          } as Feed;
        }
      )
      .filter(
        (item): item is Feed =>
          typeof item.content === 'string' &&
          typeof item.contentSnippet === 'string' &&
          typeof item.creator === 'string' &&
          typeof item.isoDate === 'string' &&
          typeof item.link === 'string' &&
          typeof item.pubDate === 'string' &&
          typeof item.title === 'string'
      );
  } catch (e) {
    console.error(`Failed to fetch data from ${url}: ${e}`);
    return [];
  }
};

export const fetchAllFeed = async (): Promise<Feed[]> => {
  const ret: Feed[] = [];
  for (const url of RSS.config.urls) {
    const items = await fetchFeedFrom(url);
    ret.push(...items);
  }
  return ret.sort(
    (lhs: Feed, rhs: Feed) => +new Date(rhs.date) - +new Date(lhs.date)
  );
};
