import React, {Component} from 'react';
import './setcard.css';

class SetCard extends Component {
    render() {
        return (
            <div className="col-sm-6 mb-4">
                <div className="h-100 card bg-light" onClick={this.props.action}>
                    <div className="card-link text-dark clickable" onClick={this.props.onCardClicked}>
                        <div className=" card-body">
                            <div className="float-right btn-sm btn-light clickable"
                                 onClick={this.props.editAction}>Edit
                            </div>
                            <h5 className="card-title">{this.props.title}</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SetCard;