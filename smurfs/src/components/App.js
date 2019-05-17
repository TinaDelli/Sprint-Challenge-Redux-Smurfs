import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import './App.css';
import SmurfForm from './SmurfForm'
import EditForm from './EditForm';

import { getSmurfs, deleteSmurf, editSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state ={
    deletingSmurf: null,
    editingSmurfId: null
  }
  componentDidMount(){
    this.props.getSmurfs();
  }

  deleteSmurf= id => {
    this.setState({ deletingSmurfId: id});
    this.props.deleteSmurf(id)
  }

  editSmurf = (e, smurf) => {
    e.preventDefault();
    this.props.editSmurf(smurf).then(() =>{
    this.setState({ editingSmurfId: null })
    });
  }

  render() {
    if (this.props.fetchingSmurfs)
    return (
      <div className="smurfs">
      <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
      </div>
    )
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => {
          if (this.state.editingSmurfId === smurf.id){
            return (
              <div  key={smurf.id}>
                <EditForm 
                smurf={smurf}
                editSmurf={this.editSmurf}
                editingSmurf={this.props.editingSmurf}
                />
                </div>
            )
            }
        return (
        <div key={smurf.id}>
          <h2>{smurf.name}</h2>
          <h5>Age: {smurf.age}</h5>
          <h5>Height: {smurf.height}</h5>
          <button onClick={() => this.setState({editingSmurfId: smurf.id})}>Edit Smurf</button>
          <button onClick={() => this.deleteSmurf(smurf.id)}>Delete Smurf</button>
          {this.props.deletingSmurf && this.state.deletingSmurfId === smurf.id && (
            <p>Deleting Smurf D:</p>
          )}
          </div>
        );
          })}
          <SmurfForm />
      </div>
        );
  }
}

const mapStateToProps = ({ smurfs, deletingSmurf, fetchingSmurfs, editingSmurf }) => ({
  smurfs, deletingSmurf, fetchingSmurfs, editingSmurf
})

export default connect(mapStateToProps, { getSmurfs, deleteSmurf, editSmurf }) (App);
