import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!yo yo yo ha ha ha 111 222 333 444 555</p>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));