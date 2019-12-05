import React, {Component} from 'react';
import SetCard from "../../common/setCard/SetCard";
import ActionCard from "../../common/actionCard/ActionCard";
import {connect} from "react-redux";
import * as DashboardActions from "../../../store/actions/dashboardActions"
import API from "../../../utils/api";

class UserSetsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sets: [],
            error: false
        }
    }

    componentDidMount() {
        API.getUserSets(this.props.auth.accessToken).then(response =>
            this.setState({
                sets: response.data
            })
        ).catch(error => this.setState({
            error: true
        }))
    }

    navigateToEditingSet = (e, setId, setName) => {
        e.stopPropagation();
        console.log("Navigate to edit set action called");
        this.props.navigateToEditSetView(setId,setName);
    };

    navigateToCreateSet= () => {
        console.log("Create new set action called");
        this.props.navigateToCreateSetView();
    };

    navigateSetView = (setID, setName) => {
        console.log("Navigate to set view");
        this.props.navigateToSetView(setID, setName);
    };

    render() {
        const successfulFetchFromAPI  =
            <div className="d-flex flex-wrap">
                <ActionCard title="Create new set" action={
                    () => this.navigateToCreateSet()
                    }>
                </ActionCard>

                {this.state.sets.map(set => (
                    <SetCard  title={set.name} key={set.id} editAction={
                        (e) => this.navigateToEditingSet(e,set.id, set.name)
                    } onCardClicked={
                        () => this.navigateSetView(set.id, set.name)
                    }>
                    </SetCard>
                ))}

            </div>;

        const unsuccessfulFetchFromAPI =
            <div className="text-center">
                <h4 className="text-center">An error has occurred. Fetching sets from API failed.</h4>
            </div>;

        return (
            <div className="bg-light container h-100">
                <h5 className="text-dark text-lg-center mb-5 mt-5">Your sets </h5>
                <hr/>
                {this.state.error ? unsuccessfulFetchFromAPI : successfulFetchFromAPI}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
};

const mapDispatchToProps = dispatch => {
    return ({
        navigateToSetView: (setId, setName) =>
            dispatch(DashboardActions.setDashboardSetView(setId, setName)),
        navigateToEditSetView: (setId, setName) =>
            dispatch(DashboardActions.setDashboardEditSetView(setId, setName)),
        navigateToCreateSetView: () => dispatch(DashboardActions.setDashboardCreateSetView())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSetsView);