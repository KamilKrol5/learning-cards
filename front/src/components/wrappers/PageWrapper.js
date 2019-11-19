import React, {Component} from 'react';

class PageWrapper extends Component {
    render() {
        return (
            <div id="m-page-wrapper" className="m-page-wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default PageWrapper;