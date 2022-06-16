/**
 * @fileoverview Defines custom document.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as NextDocument from 'next/document';
import * as Chakra from '@chakra-ui/react';
import Document from 'next/document';
import * as ChakraConfig from '@/config/chakra';

export default class Home extends Document {
  static async getInitialProps(
    ctx: NextDocument.DocumentContext
  ): Promise<NextDocument.DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles)],
    };
  }

  render(): React.ReactElement {
    return (
      <NextDocument.Html lang="en">
        <NextDocument.Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=optional"
          />
        </NextDocument.Head>
        <body>
          <Chakra.ColorModeScript
            initialColorMode={ChakraConfig.theme.config.initialColorMode}
          />
          <NextDocument.Main />
          <NextDocument.NextScript />
        </body>
      </NextDocument.Html>
    );
  }
}
