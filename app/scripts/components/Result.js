// deps
import React from 'react';

// styles
import styles from 'styles/components/Result.scss';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.result} {...this.props}>
        Button component was clicked {this.props.clicked} times!
      </div>
    );
  }
}
Result.propTypes = {
  clicked: React.PropTypes.number
};
Result.defaultProps = {
  clicked: 0
};

export default Result;
