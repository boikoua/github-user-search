import React from 'react';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

const App = () => {
  return (
    <Container>
      <Header />
      <Search hasError onSubmit={() => {}} />
    </Container>
  );
};

export default App;
