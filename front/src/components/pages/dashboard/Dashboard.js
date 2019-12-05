import React, {Component} from 'react';
import DashboardNavBar from "../../common/dashboardNavbar/DashboardNavBar";
import './dashboard.css'
import UserSetsView from "../userSetsView/UserSetsView";

class Dashboard extends Component {   render() {
        return (
            <div className="m-dashboard-wrapper m-flex-ctr-cnt">
                <div className="m-dashboard-nav">
                    <DashboardNavBar>
                    </DashboardNavBar>
                </div>
                <div className="m-dashboard-content">
                    <UserSetsView>
                    </UserSetsView>
                </div>
            </div>
        );
    }
}

export default Dashboard;