import React, { Component } from 'react';

class PageNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="page-not-found">
                <p>Page not found!</p>
            </div>
         );
    }
}
 
export default PageNotFound;