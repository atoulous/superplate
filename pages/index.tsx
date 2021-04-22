import { Spacer, Flex } from '@chakra-ui/react';

import Header from '@components/header';
import Main from '@components/main';
import Cards from '@components/cards';
import Footer from '@components/footer';

const Home: React.FC = () => (
  <Flex direction='column' minH='100vh'>
    <Header />
    <Main />
    <Cards />
    <Spacer />
    <Footer />
  </Flex>
);

export default Home;
