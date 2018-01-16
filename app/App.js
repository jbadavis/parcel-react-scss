import React from 'react';
import { render } from 'react-dom';

import styles from './main.scss';

if (module.hot) {
  module.hot.accept();
}

const App = () => (
  <main className={styles.main}>
    <h1>Hello, World!</h1>
  </main>
);

render(<App/>, document.getElementById('app'));

