import React from 'react';

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
      </div>
    );
  }
}

export default Home;
