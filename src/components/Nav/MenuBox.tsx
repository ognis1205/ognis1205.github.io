/**
 * @fileoverview Defines Menu.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ChakraIcons from '@chakra-ui/icons';
import * as MenuItem from './MenuItem';

export type Props = {
  items: MenuItem.Props[];
};

export const Component: React.FunctionComponent<Props> = ({
  items,
}: Props): React.ReactElement => {
  return (
    <Chakra.Menu isLazy id="navbar-menu">
      <Chakra.MenuButton
        as={Chakra.IconButton}
        icon={<ChakraIcons.HamburgerIcon />}
        variant="outline"
        aria-label="Options"
      />
      <Chakra.MenuList>
        {items.map((item, i) => {
          return (
            <MenuItem.Component
              key={i}
              href={item.href}
              isExternal={item.isExternal}
            >
              {item.children}
            </MenuItem.Component>
          );
        })}
      </Chakra.MenuList>
    </Chakra.Menu>
  );
};
