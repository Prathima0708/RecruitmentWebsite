import React, {Component} from 'react';

class Logo extends Component {
    render() {
        return (

            <a className="home-link" href={process.env.PUBLIC_URL + '/'} title="Hireco" rel="home">
                <img id="logo-img" height="42" width="170" className="img-fluid auto_size" src="images/logo-img.svg" alt="logo-img"/>
             </a>
        );
    }
}

export default Logo;