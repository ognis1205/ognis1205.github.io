/**
 * @fileoverview Defines article.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as FramerMotion from 'framer-motion';
import Head from 'next/head';
import * as Grid from '@/components/layout/grid';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export type Props = {
  children: React.ReactNode;
  title: string;
};

export const Component: React.FunctionComponent<Props> = ({
  children,
  title,
}: Props): React.ReactElement => {
  const t = `${title} - Shingo OKAWA`;

  return (
    <FramerMotion.motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}
        {children}
        <Grid.Global />
      </>
    </FramerMotion.motion.article>
  );
};
