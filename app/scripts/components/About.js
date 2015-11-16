// deps
import React from 'react';
import {Link} from 'react-router';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>About Route. <Link to={`/`}>Click here to go Home</Link></div>
    );
  }
}
