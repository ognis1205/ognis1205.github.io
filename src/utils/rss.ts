/**
 * @fileoverview Defines RSS utilities.
 * @copyright Shingo OKAWA 2022
 */
import dayjs from 'dayjs';
import Parser from 'rss-parser';
import * as HTMLParser from 'node-html-parser';
import * as RSS from '@/config/rss';

const PARSER = new Parser();

export type Item = {
  title: string;
  content: string;
  url: string;
  date: string;
  src?: string;
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
    const res = await fetch(`https://cryptic-reef-54759.herokuapp.com/${uri}`);
    const blob = await res.blob();
    const arrayBuffer = await blob.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } catch (e) {
    console.error(`Failed to fetch data from ${uri}: ${e}`);
    return Buffer.alloc(0);
  }
};

export const fetchFeedFrom = async (url: string): Promise<Item[]> => {
  try {
    const feed = await PARSER.parseURL(`https://cryptic-reef-54759.herokuapp.com/${url}`);
    if (!feed?.items?.length) return [];
    return feed.items
      .map(({ title, link, isoDate, content, contentSnippet }) => {
        const src = getImgSrc(content);
        if (src)
          return {
            title: title.replace(/\n/g, ' '),
            content: contentSnippet,
            url: link,
            date: dayjs(isoDate).format('YYYY-MM-DD'),
            src: src,
          } as Item;
        return {
          title: title.replace(/\n/g, ' '),
          content: contentSnippet,
          url: link,
          date: dayjs(isoDate).format('YYYY-MM-DD'),
        } as Item;
      })
      .filter(
        (item): item is Item =>
          typeof item.title === 'string' &&
          typeof item.content === 'string' &&
          typeof item.url === 'string' &&
          typeof item.date === 'string'
      );
  } catch (e) {
    console.error(`Failed to fetch data from ${url}: ${e}`);
    return [];
  }
};

export const fetchAllFeed = async (): Promise<Item[]> => {
  const allItems: Item[] = [];
  for (const url of RSS.config.urls) {
    const items = await fetchFeedFrom(url);
    allItems.push(...items);
  }
  return allItems.sort(
    (lhs: Item, rhs: Item) => +new Date(rhs.date) - +new Date(lhs.date)
  );
};
