// deps
import React from 'react';

// components
import Button from 'components/Button';

// styles
import styles from 'styles/components/ComponentList.scss';

class ComponentList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.componentlist} {...this.props}>
        <h2>Button</h2>
        <Button/>
      </div>
    );
  }
}

export default ComponentList;
