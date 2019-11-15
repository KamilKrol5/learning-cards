import React, {Component} from 'react';

class PageWrapper extends Component {
    render() {
        return (
            <div id="page-wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default PageWrapper;