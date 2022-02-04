import React from 'react';
import Global from './components/global-style'
import Article from './components/Article';
import {ThemeProvider} from 'styled-components'
import primary from './components/theme/primary';

function App() {

  

  return (
    <div className="App">
      <ThemeProvider theme = {primary}>
        <Global/>
        <Article/>
      </ThemeProvider>
    </div>
  );
}

export default App;
