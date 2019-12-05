import React, {Component} from 'react';
import * as DashboardActions from "../../../store/actions/dashboardActions";
import {connect} from "react-redux";

class ChooseModeView extends Component {
    render() {
        return (
            <div className="w-100 d-flex justify-content-around">
                <button onClick={() => {this.props.mode1()}} className="btn-lg btn-primary mb-2 mt-5 col-5">Learning mode 1</button>
                <button onClick={() => {this.props.mode2()}} className="btn-lg btn-primary mb-2 mt-5 col-5">Learning mode 2</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        mode1: () => {
            dispatch(DashboardActions.setDashboardMode1())
        },
        mode2: () => {
            dispatch(DashboardActions.setDashboardMode2())
        },
    }
};

export default connect(null, mapDispatchToProps)(ChooseModeView);