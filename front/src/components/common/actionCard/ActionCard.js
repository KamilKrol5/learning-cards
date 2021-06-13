import React, {Component} from 'react';

class ActionCard extends Component {

    render() {
        return (
            <div className="col-sm-6 mb-4">
                <div id="card" className="h-100 card bg-success" onClick={this.props.action}>
                    <a href="#" className="card-link text-dark">
                        <div className=" card-body">
                            <h4 className="card-title">{this.props.title}</h4>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default ActionCard