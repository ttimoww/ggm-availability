import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * This class contains a higher order component
 * On mount (<PrivateRoute />) there will be an check if the user is logged
 * in to the server. If false : redirect to homepage. If true : proceed
 */

class PrivateRoute extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            isChecked: false,
            isAuthenticated: false
         }
    }

    componentDidMount = () => {
        fetch('/api/isauthenticated')
        .then(resp => {
            this.setState({
                isChecked: true,
                isAuthenticated: resp.status === 200 ? true : false
            });
        });
    }

    render() {
       const {component: Component, ...rest} = this.props;
        if (this.state.isChecked){
            return(
                <Route {...rest} render={(props) => ( 
                    this.state.isAuthenticated === true 
                    ? <Component {...props} /> 
                    : <Redirect to={{ pathname: '/'}} />   
                )} />
            );
        } else {return null}
    }
}

export default PrivateRoute;