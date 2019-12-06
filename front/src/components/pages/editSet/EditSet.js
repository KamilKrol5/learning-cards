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
            setName: "Loading set...", //unnecessary (?)
            items: []
        }
    }

    componentDidMount() {
        API.getSetItems(this.props.setId, this.props.token).then(
            response => {
                const items = response.data;
                this.setState({
                    //deep clone
                    prevItems: items.map(item => ({...item})),
                    //org
                    items: response.data,
                })
            }
        ).catch(() => this.props.setErrorState())
    }

    handleAdd(e) {
        e.preventDefault();
        let i = Math.max(...this.state.items.map(i => i.id)) + 1;
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

    submitEdit = () => {
        const prevItems = this.state.prevItems;
        const items = this.state.items;
        this.submitAdditions(prevItems, items);
        this.submitDeletes(prevItems, items);
        this.submitEditions(prevItems, items);
    };

    submitAdditions(prevItems, items) {
        items.forEach(item => {
            if (prevItems.filter(prevItem => prevItem.id===item.id).length === 0) {
                API.addItem(
                    item.id,
                    item.term,
                    item.definition,
                    this.props.setId,
                    this.props.token
                );
            }
        })
    };

    submitDeletes(prevItems, items) {
        prevItems.forEach(prevItem => {
            if (items.filter(item => item.id===prevItem.id).length === 0) {
                API.removeItem(
                    prevItem.id,
                    this.props.token
                )
            }
        })

    };

    submitEditions(prevItems, items) {
        for (let pID = 0; pID < prevItems.length; pID++) {
            for (let cID = 0; cID < items.length; cID++) {
                if (
                    prevItems[pID].id === items[cID].id
                    &&
                    (prevItems[pID].term !== items[cID].term || prevItems[pID].definition !== items[cID].definition)
                ) {
                    API.updateItem(
                        items[cID].id,
                        items[cID].term,
                        items[cID].definition,
                        this.props.setId,
                        this.props.token
                    )
                }
            }
        }
    };

    render() {
        return (
            <div className="container">
                <div className="mb-4 d-flex justify-content-between">
                    <h1 className="mt-5">{this.props.setName}</h1>
                    {(this.state.editable) &&
                    <button
                        type="button"
                        className="btn btn-primary btn-lg col-sm-1 mb-5 mt-3"
                        onClick={() => {
                            this.submitEdit();
                        }}
                    >
                        Save
                    </button>
                    }
                </div>
                <div className="row">
                    {this.state.items.length !== 0 ? this.state.items.map(item => (
                            <div className="col-sm-12">
                                <EditCard height={"100px"}
                                          key={item.id}
                                          term={item.term}
                                          definition={item.definition}
                                          number={item.id}
                                          editable={this.props.editable}
                                          onDelete={this.handleDelete}
                                          onItemChange={this.handleChange}>
                                </EditCard>
                                <div className="top-buffer">
                                </div>
                            </div>
                        )) :
                        <div className="text-center"><h3>The set is empty</h3></div>
                    }

                    <div className="col-sm-12">
                        {/*//ADDING*/}
                        {(this.state.editable) &&
                        <form onSubmit={(e) => {
                            this.handleAdd(e)
                        }}>
                            <button
                                className="btn btn-primary btn-lg offset-5 col-sm-2 mt-4 mb-5"
                            >
                                ADD
                            </button>
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