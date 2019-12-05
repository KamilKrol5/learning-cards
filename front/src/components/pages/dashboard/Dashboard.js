import React, {Component} from 'react';
import DashboardNavBar from "../../common/dashboardNavbar/DashboardNavBar";
import './dashboard.css'
import UserSetsView from "../userSetsView/UserSetsView";
import {connect} from "react-redux";
import * as DashboardActions from "../../../store/actions/dashboardActions";
import ChooseModeView from "../../common/chooseModeView/ChooseModeView";
import EditSet from "../editSet/EditSet";
import Mode1 from "../../common/mode1/Mode1";
import Mode2 from "../../common/mode2/Mode2";


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.setDefaultState();
    }

    render() {
        return (
            <div className="m-dashboard-wrapper m-flex-ctr-cnt">
                <div className="m-dashboard-nav">
                    <DashboardNavBar>
                    </DashboardNavBar>
                </div>
                <div className="m-dashboard-content">
                    {this.drawViewAccordingToState()}
                </div>
            </div>
        );
    }

    drawViewAccordingToState() {
        switch (this.props.currentView) {
            case 'DASHBOARD_USER_SET_VIEW':
                return <UserSetsView>
                </UserSetsView>;
            case 'DASHBOARD_EDIT_SET_VIEW':
                return <EditSet editable={true}>
                </EditSet>;
            case 'DASHBOARD_SET_VIEW':
                return <div>
                    <ChooseModeView>
                    </ChooseModeView>
                    <EditSet editable={false}>
                    </EditSet>
                </div>;
            case 'DASHBOARD_CREATE_SET_VIEW':
                return <EditSet editable={true}>
                </EditSet>;
            case 'DASHBOARD_MODE1':
                return <Mode1 setID={this.props.setID} setName={this.props.setName}/>;
            case 'DASHBOARD_MODE2':
                return <Mode2 setID={this.props.setID} setName={this.props.setName}/>;
            default:
                return <div className="text-center"><h2>Error</h2></div>
        }
    }
}

const mapStateToProps = state => {
    return {
        currentView: state.dashboard.currentView,
        setID: state.dashboard.setID,
        setName: state.dashboard.setName,
        errorMessage: state.dashboard.errorMessage,
    }
};

const mapDispatchToProps = dispatch => {
    return ({
        setDefaultState: () => dispatch(DashboardActions.setDashboardUserSetView())
    })
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);