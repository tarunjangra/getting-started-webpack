var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return <div>
      <h1>My Webpack app</h1>
      <p>A cool app build with react, webpakc and magic</p>
    </div>
  }
}

ReactDOM.render(<App/>,document.getElementById('root-container'));
