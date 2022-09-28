/**
 * @fileoverview Defines Timeline utilities.
 * @copyright Shingo OKAWA 2022
 */
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const getHostFrom = (url: string): string => new URL(url).hostname;

export const getFaviconFrom = (hostname: string): string =>
  `https://www.google.com/s2/favicons?sz=128&domain=${hostname}`;

export const formatDate = (text: string): string => {
  const date = dayjs(text);
  return date.fromNow();
};

export const groupByKey = <K, V>(
  array: readonly V[],
  getKey: (cur: V, idx: number, src: readonly V[]) => K
): [K, V[]][] =>
  Array.from(
    array.reduce((map, cur, i, src) => {
      const key = getKey(cur, i, src);
      const items = map.get(key);
      if (items) items.push(cur);
      else map.set(key, [cur]);
      return map;
    }, new Map<K, V[]>())
  );
