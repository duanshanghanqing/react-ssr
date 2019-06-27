import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Home',
    };
  }

  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={() => {alert()}}>button</button>
        <Link to="/login">login</Link>
      </div>
    );
  }
}

export default Home;
