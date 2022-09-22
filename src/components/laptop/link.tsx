/**
 * @fileoverview Defines link.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ReactIcons from 'react-icons/io5';

export type Props = Chakra.BoxProps & {
  href: string;
  target: string;
};

export const Github: React.FunctionComponent<Props> = ({
  href,
  target,
  ...props
}: Props): React.ReactElement => {
  const theme = Chakra.useTheme();

  return (
    <Chakra.Box
      backdropFilter="blur(10px)"
      shadow="md"
      rounded="full"
      {...props}
    >
      <Chakra.Link
        color={theme.colors.hotPink}
        display="inline-flex"
        alignItems="center"
        style={{ gap: 4 }}
        p={1}
        href={href}
        target={target}
      >
        <ReactIcons.IoLogoGithub />
        GitHub
      </Chakra.Link>
    </Chakra.Box>
  );
};
