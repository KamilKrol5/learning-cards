import React, {Component} from 'react';
import './pageflexwrapper.css';

class PageFlexWrapper extends Component {
    render() {
        return (
            <div id="m-page-flex-wrapper" className="m-page-wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default PageFlexWrapper;