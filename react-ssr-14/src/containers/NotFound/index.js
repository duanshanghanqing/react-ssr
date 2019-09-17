import React from 'react';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.NOT_FOUND = true;
    }
  }

  render() {
    return (
      <div>NotFound</div>
    );
  }
}

export default NotFound;
