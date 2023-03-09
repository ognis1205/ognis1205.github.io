/**
 * @fileoverview Defines GitHub utilities.
 * @copyright Shingo OKAWA 2023
 */
import * as GitHub from '@/config/github';

export type Stats = {
  forks: number;
  stargazers: number;
};

export const fetchStatsOf = async (
  owner: string,
  name: string,
  signal: AbortSignal
): Promise<Stats> => {
  try {
    const res = await fetch(`${GitHub.config.api}/repos/${owner}/${name}`, {
      signal: signal,
    });
    const json = await res.json();
    return {
      forks: json.forks || 0,
      stargazers: json.stargazers_count || 0,
    } as Stats;
  } catch (e) {
    console.error(`Failed to fetch stats of ${owner}/${name}: ${e}`);
    return {
      forks: 0,
      stargazers: 0,
    } as Stats;
  }
};

const SI = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

export const abbreviateCount = (count: number): string => {
  const tier = (Math.log10(Math.abs(count)) / 3) | 0;
  if (tier == 0) return count.toString();
  const suffix = SI[tier];
  const scaled = count / Math.pow(10, tier * 3);
  return scaled.toFixed(1) + suffix;
};

export const getAvatorSrc = (name: string): string => {
  return `${GitHub.config.avator}/${name}.png`;
};
