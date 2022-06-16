/**
 * @fileoverview Defines font.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';

export const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');
  `}</style>
);
