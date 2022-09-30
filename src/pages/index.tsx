/**
 * @fileoverview Defines /.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ChakraIcon from '@chakra-ui/icons';
import * as ReactIcon from 'react-icons/io5';
import Image from 'next/image';
import NextLink from 'next/link';
import * as Article from '@/layouts/Article';
import * as Section from '@/layouts/Section';
import * as Paragraph from '@/layouts/Paragraph';
import * as Bio from '@/components/Bio';
import * as WhatILove from '@/components/WhatILove';
import * as WhatIDo from '@/components/WhatIDo';
import * as Loaders from '@/utils/loaders';

const works = [
  {
    title: 'Stay at Home, Tokyo - Chief Housework Officer',
    year: 'August 2020 - Present',
    description:
      'Living with my partner and cat buddies. Conducting all of the housework and having a life-long passion for cooking.',
  },
  {
    title: 'Megagon Labs, Recruit Co., Ltd, Tokyo - Research Engineer',
    year: 'June 2018 - August 2020',
    description:
      'Worked alongside international teams. Researched data engineering to unify software engineering and ML systems.',
  },
  {
    title: 'FOLIO Inc., Tokyo - VP of Engineering, ML Engineer',
    year: 'December 2016 - April 2018',
    description:
      'Designed and built financial data microservices and portfolio optimization engine. Researched topological data analysis for market regime analysis.',
  },
  {
    title: 'SOINN inc., Yokohama - Data Scientist',
    year: 'February 2016 - December 2016',
    description:
      'Participated in “Future AI Research and Development Project” of NEDO. Designed and built image recognition engine for UAVs as part of the NEDO project.',
  },
  {
    title: 'Supership Inc., Tokyo - Search Engineer',
    year: 'November 2014 - January 2016',
    description:
      'Worked across teams to implement robust search engines. Developed search engine modules such as query parser and large scale LSH library.',
  },
  {
    title: 'MARSFLAG Inc., Tokyo - Server Side Engineer, R&D Engineer',
    year: 'May 2011 - October 2014',
    description:
      'Designed and built internal management system of search engines. Researched next generation search/recommendation system.',
  },
];

const educations = [
  {
    title: 'Graduate School of Energy Science, Kyoto University - Withdrawal',
    year: 'April 2005 - September 2008',
    description: 'GPA: 3.80/4.00 in major, 3.80/4.00 overall',
  },
  {
    title:
      'Faculty of Engineering, Hokkaido University - B.E., Nuclear Engineering',
    year: 'April 2000 - March 2005',
    description: 'GPA: 3.83/4.00 in major, 3.59/4.00 overall',
  },
];

const loves = ['Cooking', 'Music', 'Programming', 'Machine Learning', 'Cats'];

const activities = [
  {
    href: 'https://github.com/ognis1205',
    icon: <ReactIcon.IoLogoGithub />,
    title: 'GitHub',
  },
  {
    href: 'https://twitter.com/ognis1205',
    icon: <ReactIcon.IoLogoTwitter />,
    title: 'Twitter',
  },
  {
    href: 'https://www.instagram.com/ognis1205',
    icon: <ReactIcon.IoLogoInstagram />,
    title: 'Instagram',
  },
];

const ProfileImage = Chakra.chakra(Image, {
  shouldForwardProp: (prop) =>
    ['width', 'height', 'src', 'alt', 'loader', 'unoptimized'].includes(prop),
});

const Component: React.FunctionComponent<
  Record<string, never>
> = (): React.ReactElement => (
  <Article.Component title="Home">
    <Chakra.Container>
      <Chakra.Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={Chakra.useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a developer based in Tokyo!
        <br />
        The above &ldquo;MNIST Dice&rdquo; is a small neural network running
        entirely in a WebGL GLSL shader that hallucinates new hand-written
        digits in real-time.
      </Chakra.Box>
      <Chakra.Box display={{ md: 'flex' }}>
        <Chakra.Box flexGrow={1}>
          <Chakra.Heading as="h2" variant="page-title">
            Shingo OKAWA
          </Chakra.Heading>
          <p>Data Misfit ( Developer )</p>
        </Chakra.Box>
        <Chakra.Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Chakra.Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile/shingo.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
              loader={Loaders.DefaultLoader}
              unoptimized={true}
            />
          </Chakra.Box>
        </Chakra.Box>
      </Chakra.Box>

      <Section.Component delay={0.1}>
        <Chakra.Heading as="h3" variant="section-title">
          Work
        </Chakra.Heading>
        <Paragraph.Component>
          Shingo is a software developer based in Tokyo with a passion for
          building digital services/stuff he wants. He has a knack for all
          things prototyping products, from planning and designing all the way
          to solving real-life problems with code. When not online, he loves
          cooking, playing with his cat buddies and contributing to OSS projects
          such as{' '}
          <NextLink href="https://github.com/mlflow" passHref scroll={false}>
            <Chakra.Link>MLflow</Chakra.Link>
          </NextLink>{' '}
          and{' '}
          <NextLink href="https://github.com/gfx-rs" passHref scroll={false}>
            <Chakra.Link>wgpu</Chakra.Link>
          </NextLink>
          .
        </Paragraph.Component>
        <Chakra.Box textAlign="center" my={4}>
          <NextLink href="/portfolio" passHref scroll={false}>
            <Chakra.Button
              rightIcon={<ChakraIcon.ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Chakra.Button>
          </NextLink>
        </Chakra.Box>
      </Section.Component>

      <Section.Component delay={0.2}>
        <Bio.Component heading={'Bio'} items={works} />
        <Bio.Component heading={'Education'} items={educations} />
      </Section.Component>

      <Section.Component delay={0.3}>
        <WhatILove.Component items={loves} />
        <Chakra.Box textAlign="center" my={4}>
          <NextLink href="/timeline" passHref scroll={false}>
            <Chakra.Button
              rightIcon={<ChakraIcon.ChevronRightIcon />}
              colorScheme="teal"
            >
              My timeline
            </Chakra.Button>
          </NextLink>
        </Chakra.Box>
      </Section.Component>

      <Section.Component delay={0.3}>
        <WhatIDo.Component items={activities} />
      </Section.Component>
    </Chakra.Container>
  </Article.Component>
);

export default Component;
