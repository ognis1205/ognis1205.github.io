/**
 * @fileoverview Defines paragraph.
 * @copyright Shingo OKAWA 2022
 */
import styled from '@emotion/styled';

export type Props = {
  children: React.ReactNode;
};

const StyledP = styled.p`
  text-align: justify;
  text-indent: 1em;
`;

export const Component: React.FunctionComponent<Props> = ({
  children,
}: Props): React.ReactElement => {
  return <StyledP>{children}</StyledP>;
};
