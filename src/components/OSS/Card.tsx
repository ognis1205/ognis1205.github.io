/**
 * @fileoverview Defines Card.
 * @copyright Shingo OKAWA 2023
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ReactIcon from 'react-icons/io5';
import * as GitHub from '@/utils/github';

export type Props = {
  owner: string;
  name: string;
  href: string;
};

export const Component: React.FunctionComponent<Props> = ({
  owner,
  name,
  href,
}: Props): React.ReactElement => {
  const [stats, setStats] = React.useState<GitHub.Stats>({
    forks: 0,
    stargazers: 0,
  } as GitHub.Stats);

  React.useEffect(() => {
    const controller = new AbortController();

    const { signal } = controller;

    (async () => {
      await GitHub.fetchStatsOf(owner, name, signal).then((stats) => {
        setStats(stats);
      });
    })();

    return () => {
      controller.abort();
    };
  }, [owner, name]);

  return (
    <Chakra.Box px={6}>
      <Chakra.LinkBox p={1} textAlign="center">
        <Chakra.Heading size="sm" width="100%">
          <Chakra.Flex justifyContent="center" alignItems="center" flex={1}>
            <Chakra.Link href={href} isExternal>
              <Chakra.IconButton
                p={1}
                icon={
                  <Chakra.Image
                    width="100%"
                    height="100%"
                    borderRadius="full"
                    objectFit="cover"
                    src={GitHub.getAvatorSrc(name)}
                    alt="Icon"
                  />
                }
                aria-label={`Read more about ${name}`}
              />
            </Chakra.Link>
            <Chakra.Text pl={3} fontSize={16} fontWeight="bold">
              {name}
            </Chakra.Text>
            <Chakra.Spacer />
            <Chakra.Box
              pl={3}
              fontSize={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ReactIcon.IoStarOutline />
              {GitHub.abbreviateCount(stats.stargazers)}
            </Chakra.Box>
            <Chakra.Box
              pl={3}
              fontSize={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ReactIcon.IoGitNetworkOutline />
              {GitHub.abbreviateCount(stats.forks)}
            </Chakra.Box>
          </Chakra.Flex>
        </Chakra.Heading>
      </Chakra.LinkBox>
    </Chakra.Box>
  );
};
