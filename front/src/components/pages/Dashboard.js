import React, {Component} from 'react';
import {connect} from "react-redux";
import * as DashboardActions from '../../store/actions/dashboardActions'
import {Link} from "react-router-dom";

/**
 * Komponent zawierający profil użytkownika
 */
class Dashboard extends Component {
    render() {
        return (
            <div>
                <Link
                    to={"#"}
                    style={{
                        'border-radius': '1px solid red'
                    }}
                    onClick={
                        () => {
                            this.props.setDashboardError('cipa occured')
                        }
                    }
                >
                    Click
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dashboard: state.dashboard
    }
};

const mapDispatchToProps = dispatch => {
    return ({
        //DEFAULT, can be used to reset
        setDashboardUserSetView: () => {
            dispatch(DashboardActions.setDashboardUserSetView())
        },
        setDashboardPreferencesView: () => {
            dispatch(DashboardActions.setDashboardPreferencesView())
        },
        setDashboardSetView: (setID) => {
            dispatch(DashboardActions.setDashboardSetView(setID))
        },
        setDashboardError: (errorMessage) => {
            dispatch(DashboardActions.setDashboardError(errorMessage))
        },
        resetDashboardError: () => {
            dispatch(DashboardActions.setDashboardError(null))
        },
    })
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);