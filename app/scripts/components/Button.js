// deps
import React from 'react';

// styles
import styles from 'styles/components/Button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button /*className={styles.button}*/ {...this.props}>
        Button
      </button>
    );
  }
}

Button.propTypes = { clicked: React.PropTypes.number };
Button.defaultProps = { clicked: 0 };

export default Button;
