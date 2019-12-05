import React, {Component} from 'react';
import './setcard.css';

class SetCard extends Component {
    render() {
        return (
            <div className="col-sm-6 mb-4">
                <div className="h-100 card bg-light" onClick={this.props.action}>
                    <a href="#" className="card-link text-dark " onClick={this.props.onCardClicked}>
                        <div className=" card-body">
                            <a className="float-right btn-sm btn-light" onClick={this.props.editAction}>Edit</a>
                            <h5 className="card-title">{this.props.title}</h5>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default SetCard;