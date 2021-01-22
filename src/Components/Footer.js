import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    Copyright = () => {
        return (
            <h2 variant="body2" color="textSecondary" align="center">
                {'Copyright 0'}
                {'   Lets Talk!'}
                {new Date().getFullYear()}
                {'.'}
            </h2>
        )
    }
    render() {
        return (
            // <Footer>
            <div class="footer l-box is-center">
                {this.Copyright()}

            </div>

            // </Footer>
        )
    }
}
export default Footer