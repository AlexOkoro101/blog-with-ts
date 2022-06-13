import { HStack, Text } from '@chakra-ui/react';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <HStack>
      <Text>Blog<Text as="span">er</Text></Text>
      <HStack>
      </HStack>
    </HStack>
  );
};

export default Navbar;
