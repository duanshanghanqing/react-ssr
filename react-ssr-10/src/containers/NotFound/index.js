import React from 'react';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.staticContext && (this.props.staticContext.NOT_FOUND = true);
    }
    render() {
        return (
            <div>NotFound</div>
        );
    }
}

export default NotFound;
