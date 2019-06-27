import React from 'react';
import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Login',
        };
    }

    render() {
        return (
            <div>
                {this.state.name}
            </div>
        );
    }
}

export default Login;
