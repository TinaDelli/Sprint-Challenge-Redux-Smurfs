import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SmurfForm from './SmurfForm'

import { getSmurfs } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => 
        <div key={smurf.id}>
          <h2>{smurf.name}</h2>
          <h5>{smurf.age}</h5>
          <h5>{smurf.height}</h5>
          </div>)}
          <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs }) => ({
  smurfs
})

export default connect(mapStateToProps, { getSmurfs }) (App);
