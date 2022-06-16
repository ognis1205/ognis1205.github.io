/**
 * @fileoverview Defines navbar.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ChakraIcons from '@chakra-ui/icons';
import * as ReactIcons from 'react-icons/io5';
import * as Logo from '@/components/navigation/logo';
import * as Toggle from '@/components/navigation/toggle';
import NextLink from 'next/link';

export type MyLinkProps = Chakra.LinkProps & {
  path: string;
};

const MyLink: React.FunctionComponent<MyLinkProps> = ({
  href,
  path,
  target,
  children,
  ...props
}: MyLinkProps): React.ReactElement => {
  const active = path === href;

  const inactiveColor = Chakra.useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <NextLink href={href} passHref scroll={false}>
      <Chakra.Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Chakra.Link>
    </NextLink>
  );
};

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
          <MyLink href="/works" path={path}>
            Works
          </MyLink>
          <MyLink
            target="_blank"
            href="https://github.com/ognis1205/ognis1205-homepage"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <ReactIcons.IoLogoGithub />
            View Source
          </MyLink>
        </Chakra.Stack>
        <Chakra.Flex flex={1}>
          <Chakra.Spacer />
          <Toggle.Component />
          <Chakra.Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Chakra.Menu isLazy id="navbar-menu">
              <Chakra.MenuButton
                as={Chakra.IconButton}
                icon={<ChakraIcons.HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <Chakra.MenuList>
                <NextLink href="/" passHref>
                  <Chakra.MenuItem as={Chakra.Link}>About</Chakra.MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <Chakra.MenuItem as={Chakra.Link}>Works</Chakra.MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <Chakra.MenuItem as={Chakra.Link}>Posts</Chakra.MenuItem>
                </NextLink>
                <Chakra.MenuItem
                  as={Chakra.Link}
                  href="https://github.com/ognis1205/ognis1205-homepage"
                >
                  View Source
                </Chakra.MenuItem>
              </Chakra.MenuList>
            </Chakra.Menu>
          </Chakra.Box>
        </Chakra.Flex>
      </Chakra.Container>
    </Chakra.Box>
  );
};
