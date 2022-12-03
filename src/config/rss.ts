/**
 * @fileoverview Defines RSS config.
 * @copyright Shingo OKAWA 2022
 */

export const config = {
  title: "ognis1205's timeline",
  description: 'Personal website by ognis1205',
  proxy: 'https://ognis1205-cors-anywhere.vercel.app/api/cors',
  urls: [
    'https://raw.githubusercontent.com/ognis1205/ognis1205-web-feed/main/instagram.json',
    'https://raw.githubusercontent.com/ognis1205/ognis1205-web-feed/main/twitter.json',
  ],
};
