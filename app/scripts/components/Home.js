// deps
import React from 'react';
import {Link} from 'react-router';

// styles
import styles from 'styles/home.scss';

// components
import Button from 'components/Button';
import Result from 'components/Result';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    // component hooks - will be passed as props to respective component
    this.componentHooks = {
      Button: {
        onClick() {
          const clicked = this.state.Button.clicked + 1;
          this.setState({
            Button: {
              clicked: clicked
            },
            Result: {
              clicked: clicked
            }
          });
        }
      }
    };

    // set initial state
    this.state = {
      Button: { clicked: 0 },
      Result: { clicked: 0 }
    };

    // bindings
    this.componentHooks.Button.onClick = this.componentHooks.Button.onClick.bind(this);
  }
  render() {
    return (
      <div className={styles.home}>
        <Button {...this.state.Button} {...this.componentHooks.Button} />
        <Result {...this.state.Result} />
        <Link to={`/about`}>Click here to go About</Link>
      </div>
    );
  }
}
