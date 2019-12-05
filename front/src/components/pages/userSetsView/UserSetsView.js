import React, {Component} from 'react';
import SetCard from "../../common/setCard/SetCard";
import ActionCard from "../../common/actionCard/ActionCard";

const sets = [
    {
        "id": 1,
        "name": "set1",
        "owner": 1,
        "creation_date": " "
    },
    {
        "id": 1,
        "name": "set1",
        "owner": 1,
        "creation_date": " "
    },
    {
        "id": 1,
        "name": "set143533333333333333333333333333333333333333",
        "owner": 1,
        "creation_date": " "
    },
    {
        "id": 1,
        "name": "set1fdgdfgd",
        "owner": 1,
        "creation_date": " "
    },
    {
        "id": 1,
        "name": "set1",
        "owner": 1,
        "creation_date": " "
    },
    {
        "id": 1,
        "name": "set1",
        "owner": 1,
        "creation_date": " "
    },
    {
        "id": 1,
        "name": "set1",
        "owner": 1,
        "creation_date": " "
    },
    {
        "id": 1,
        "name": "set2",
        "owner": 1,
        "creation_date": " "
    }
];


class UserSetsView extends Component {

    constructor(props) {
        super(props);
            this.state = {
            sets: sets
        }
    }

    render() {
        return (
            <div className="bg-light container h-100">
                <h5 className="text-dark text-lg-center mb-5 mt-5">Your sets </h5>
                <hr/>
                <div className="d-flex flex-wrap">
                    <ActionCard title="Create new set" action={
                        () => console.log("Create new set action called")
                        //    TO DO
                    }>
                    </ActionCard>

                    {this.state.sets.map(set => (
                        <SetCard  title={set.name} key={set.id}>
                        </SetCard>
                    ))}

                </div>
            </div>
        );
    }
}

export default UserSetsView;