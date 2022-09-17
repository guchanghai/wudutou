'use strict';

// https://reactjs.org/docs/react-without-jsx.html
// https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.19.2&externalPlugins=&assumptions=%7B%7D

// https://reactjs.org/docs/react-api.html#createelement
const createElement = React.createElement;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class BuyCTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = { added: false };
  }

  render() {
    if (this.state.added) {
      return 'Cart item is added.';
    }

    // https://reactjs.org/docs/react-api.html#createelement
    return createElement(
      'button',
      { onClick: () => this.setState({ added: true }) },
      'Add to cart'
    );
  }
}

// Render React componet on the defined DOM root container
const domContainer = document.querySelector('#react_root_container');

// https://reactjs.org/docs/react-dom-client.html#createroot
const root = ReactDOM.createRoot(domContainer);

// https://reactjs.org/docs/react-dom.html#render
root.render(createElement(BuyCTA));
