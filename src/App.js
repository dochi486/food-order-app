import React, { Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Card from './components/UI/Card';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Card>
          <Meals />
        </Card>
      </main>
    </Fragment>
  );
}

export default App;
