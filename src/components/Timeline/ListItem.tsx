/**
 * @fileoverview Defines ListItem.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import styled from '@emotion/styled';
import * as Timeline from '@/utils/timeline';

export type Props = {
  date: string;
  title: string;
  action?: string;
  url?: string;
};

const Link = styled.a`
  display: block;
  position: relative;
  &:not(:first-child) {
    margin-top: 2.2em;
  }
`;

const IconBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 20px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  line-height: 1.2;
`;

const Favicon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 7px;
  border-radius: 4px;
`;

const ActionBox = styled.div``;

const Action = styled.span``;

const Date = styled.time`
  &:before {
    content: '/';
    margin: 0 5px;
  }
`;

const TitleBox = styled.h2`
  margin-top: 0.5em;
  font-size: 1.15em;
  line-height: 1.6;
  letter-spacing: 0.01em;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export const Component: React.FunctionComponent<Props> = ({
  date,
  title,
  action,
  url,
}: Props): React.ReactElement => {
  const hostname = url ? Timeline.getHostFrom(url) : null;

  return (
    <Link>
      <IconBox />
      <InfoBox>
        {hostname && <Favicon src={Timeline.getFaviconFrom(hostname)} />}
        <ActionBox>
          {!!action?.length && <Action>{action}</Action>}
          <Date>{Timeline.formatDate(date)}</Date>
        </ActionBox>
      </InfoBox>
      <TitleBox>{title}</TitleBox>
    </Link>
  );
};
