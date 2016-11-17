var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {

  constructor() {
    super();
    this.state = {title: "Webpack"}
  }
  render() {
    return <div>
      <h1>My {this.state.title} app</h1>
      <p>A extremely cool app by Tarun Jangra build with react, webpakc and magic.
      So nice.</p>
    </div>
  }
}

ReactDOM.render(<App/>,document.getElementById('root-container'));
