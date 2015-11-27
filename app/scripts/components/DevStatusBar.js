// deps
import React from 'react';

// styles
import styles from 'styles/components/DevStatusBar.scss';

class DevStatusBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const info = [];
    Object.keys(this.props).forEach(key => {
      info.push(<span key={key}>{key}: {this.props[key]}</span>);
    });
    return (
      <div className={styles.devstatusbar}>
        {info}
      </div>
    );
  }
}

export default DevStatusBar;
