import React, {Component} from "react";
import {compose} from "recompose";

import { withFirebase} from "../Firebase";
import {withAuthorization} from  "../Session"

class list extends Component{
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            restaurants: [],
        };
    }
    componentDidMount() {
        this.setState({loading:true});

        this.props.firebase.restaurants().on('value',snapshot =>{
            this.setState({loading : false });
        });
    }
    componentWillUnmount() {
        this.props.firebase.restaurants().off();
    }

    render() {
        const { restaurants, loading } = this.state;
        return (
            <div>
                {loading && <div>Loading ...</div>}

                <
            </div>
        );
    }
}
