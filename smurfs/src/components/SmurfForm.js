import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions'

class SmurfForm extends React.Component{
    state = {
        smurf: {
            name: "",
            age: "",
            height: ""
        }
    };

    handleChanges = e => {
        let value = e.target.value;
        if (e.target.name === 'age'){
            value = parseInt(value, 10);
        }

        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        });
    };

    addSmurf = e => {
        e.preventDefault();
        this.props.addSmurf(this.state.smurf)

        this.setState({
            smurfs:{
                name: "",
                age: "",
                height: ""
            }
        });
    };

    render(){
        return (
            <div className="smurf-form">
            <h2>Add A Smurf</h2>
            <form onSubmit={this.addSmurf}> 
                <label htmlFor="name">Smurf's Name</label>
                <input 
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.handleChanges}
                value={this.state.smurf.name}
                />
                 <label htmlFor="age">Smurf's Age</label>
                <input 
                type="number"
                name="age"
                placeholder="Age"
                onChange={this.handleChanges}
                value={this.state.smurf.age}
                />
                 <label htmlFor="height">Smurf's Height</label>
                <input 
                type="text"
                name="height"
                placeholder="Height"
                onChange={this.handleChanges}
                value={this.state.smurf.height}
                />
                <button>
                    Add Smurf
                </button>
            </form>
            </div>
        );
    }
}

const mapStateToProps = ({ addSmurf, fetchingSmurfs }) => ({
    addSmurf, fetchingSmurfs
});

export default connect(
    mapStateToProps, 
    { addSmurf }
)(SmurfForm)