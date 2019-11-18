import React, {Component} from 'react';
import * as TestUserActions from "../../store/actions/testActions";
import {connect} from "react-redux";

/**
 * Komponent do testowania działania API
 */
class ApiTest extends Component {
    render() {
        return (
            <div>
                <p>{JSON.stringify(this.props.randomUser)}</p>
                <button onClick={e => {
                    e.preventDefault();
                    this.props.fetchUser();
                }}>Click me
                </button>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        randomUser: state.randomUser,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => {
            dispatch(TestUserActions.fetchRandomUser())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiTest);