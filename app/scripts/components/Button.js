// deps
import React from 'react';

// styles
import styles from 'styles/components/Button.scss';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.button} {...this.props}>
        Clicked {this.props.clicked} times!
      </div>
    );
  }
}
Button.propTypes = { clicked: React.PropTypes.number };
Button.defaultProps = { clicked: 0 };
