/**
 * @fileoverview Defines navbar.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ReactIcons from 'react-icons/io5';
import * as Logo from './Logo';
import * as Link from './Link';
import * as MenuBox from './MenuBox';
import * as Toggler from './Toggler';

const menu = [
  {
    href: '/',
    children: 'About',
    isExternal: false,
  },
  {
    href: '/portfolio',
    children: 'Portfolio',
    isExternal: false,
  },
  {
    href: '/timeline',
    children: 'Timeline',
    isExternal: false,
  },
  {
    href: 'https://github.com/ognis1205/ognis1205.github.io',
    children: 'View Source',
    isExternal: true,
  },
];

export type Props = Chakra.BoxProps & {
  path: string;
};

export const Component: React.FunctionComponent<Props> = ({
  path,
  ...props
}: Props): React.ReactElement => {
  return (
    <Chakra.Box
      position="fixed"
      as="nav"
      w="100%"
      bg={Chakra.useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Chakra.Container display="flex" p={2} maxW="container.md">
        <Chakra.Flex align="center" mr={5}>
          <Chakra.Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo.Component />
          </Chakra.Heading>
        </Chakra.Flex>
        <Chakra.Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Link.Component href="/portfolio" path={path}>
            Portfolio
          </Link.Component>
          <Link.Component href="/timeline" path={path}>
            Timeline
          </Link.Component>
          <Link.Component
            target="_blank"
            href="https://github.com/ognis1205/ognis1205.github.io"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <ReactIcons.IoLogoGithub />
            View Source
          </Link.Component>
        </Chakra.Stack>
        <Chakra.Flex flex={1}>
          <Chakra.Spacer />
          <Toggler.Component />
          <Chakra.Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <MenuBox.Component items={menu} />
          </Chakra.Box>
        </Chakra.Flex>
      </Chakra.Container>
    </Chakra.Box>
  );
};
