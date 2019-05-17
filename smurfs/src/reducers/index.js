import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURFS_START, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAILURE } from '../actions';
/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SMURFS_START: 
    return {
      ...state,
      fetchingSmurfs: true
    };
    case FETCH_SMURFS_SUCCESS:
    return {
      ...state,
      error: '',
      fetchingSmurfs: false,
      smurfs: action.payload
    };
    case ADD_SMURFS_START:
    return {
      ...state,
      addingSmurf: true
    };
    case ADD_SMURFS_SUCCESS:
    return {
      ...state,
      addingSmurf: false,
      error:'',
      smurfs: action.payload
    };
    default:
    return state;
  }
}

export default reducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
