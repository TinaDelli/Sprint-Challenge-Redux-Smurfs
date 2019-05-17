import React from 'react';

class EditForm extends React.Component {
    state= {
        smurf: this.props.smurf
    };

    handleChanges = e => {
        let value = e.target.value;
        if (e.target.name === 'age'){
            value = parseInt(value, 10);
        }

        this.setState({
            smurf:{
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        });
    };

    editSmurf = e => {
        this.props.editSmurf(e, this.state.smurf)
    }

    render(){
        return(
            <div className="smurf-form">
            <h2>Edit This Smurf</h2>
            <form onSubmit={this.editSmurf}> 
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
                    Edit Smurf
                </button>
            </form>
            </div>
        )
    }
}

export default EditForm;