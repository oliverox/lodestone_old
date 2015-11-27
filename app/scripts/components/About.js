// deps
import React from 'react';
import {Link} from 'react-router';

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>About Route. <Link to={`/`}>Click here to go Home</Link></div>
    );
  }
}

export default About;
