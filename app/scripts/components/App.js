// deps
import React, {PropTypes} from 'react';

// components
import DevStatusBar from 'components/DevStatusBar';

const App = React.createClass({
  propTypes: typeof __DEV__ && {
    children: PropTypes.object.isRequired
  },
  render() {
    return (
      <div>
        <DevStatusBar appName="Lodestone" />
        {this.props.children}
      </div>
    );
  }
});

export default App;
