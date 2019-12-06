import React, {Component} from 'react';
import './editset.css'
import EditCard from "../../common/editCard/EditCard";
import API from "../../../utils/api";
import {connect} from "react-redux";
import * as DashboardActions from "../../../store/actions/dashboardActions";

class EditSet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editable: this.props.editable,
            setName: "h",
            items: []
        }
    }

    componentDidMount() {
        API.getSetItems(this.props.setId, this.props.token).then(
            response => {
                this.setState({
                    items: response.data
                })
            }
        ).catch(error => this.props.setErrorState())
    }

    addState(e) {
        e.preventDefault();
        let i=0;
        if (this.state.items.length > 0)
            i = Math.max(...this.state.items.map(i => i.id))+1;
        const newItem = {id: i, term: null, definition: null};
        this.setState({
                items: [...this.state.items, newItem],
            }, function () {
            }
        )
    }

    handleDelete = (itemID) => {
        console.log(itemID);
        const newSets = this.state.items.filter(items => (items.id !== itemID));
        this.setState({items: newSets}, function () {
            console.log(this.state.items)
        });
    };

    handleChange = (item, k) => {
        let newArr = this.state.items;
        let i = newArr.findIndex(x => x.id === k);
        newArr[i] = item;
        this.setState({
            items: newArr
        }, function () {
            console.log(this.state.items);
        });
    };

    render() {
        return (
            <div className="container">
                <div className="mb-4 d-flex justify-content-between" >
                    <h1 className="mt-5">{this.props.setName}</h1>
                    { (this.state.editable) &&
                    <button type="button" className="btn btn-primary btn-lg col-xs-1 mb-5 mt-3">Save</button>
                    }
                </div>
                <div className="row">
                    {this.state.items.length !== 0 ? this.state.items.map(item => (
                        <div className="col-sm-12">
                            <EditCard height={"100px"} onDelete={this.handleDelete} key={item.id} term={item.term}
                                      definition={item.definition} number={item.id} editable={this.props.editable}
                                      onItemChange={this.handleChange}>
                            </EditCard>
                            <div className="top-buffer">
                            </div>
                        </div>
                    )) :
                    <div className="text-center"><h3>The set is empty</h3></div>
                    }

                    <div className="col-sm-12">
                        { (this.state.editable) &&
                            <form onSubmit={(e) => {
                                this.addState(e)
                            }}>
                                <button className="btn btn-primary btn-lg offset-5 col-xs-2 mt-4 mb-5">ADD</button>
                            </form>
                        }
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.accessToken,
        setId: state.dashboard.setID,
        setName: state.dashboard.setName
    }
};

const mapDispatchToProps = dispatch => {
    return ({
        setErrorState: () => dispatch(DashboardActions.setDashboardError())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSet);