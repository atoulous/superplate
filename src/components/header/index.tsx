import React from 'react';
import { Center } from '@chakra-ui/react';

import Logo from '@components/logo';

const Header: React.FC = () => {
  return (
    <Center bg='header.100'>
      <Logo />
    </Center>
  );
};

export default Header;
