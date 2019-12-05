import React, {Component} from 'react';

class ChooseModeView extends Component {
    render() {
        return (
            <div className="w-100 d-flex justify-content-around">
                <button className="btn-lg btn-primary mb-2 mt-5 col-5">Learning mode 1</button>
                <button className="btn-lg btn-primary mb-2 mt-5 col-5">Learning mode 2</button>
            </div>
        );
    }
}

export default ChooseModeView;