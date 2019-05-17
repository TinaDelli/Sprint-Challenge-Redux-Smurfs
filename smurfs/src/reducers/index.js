import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURFS_START, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAILURE, DELETE_START, DELETE_SUCCESS, DELETE_FAILURE, EDIT_SMURF_START, EDIT_SMURF_SUCCESS, EDIT_SMURF_FAILURE } from '../actions';
/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  deletingSmurf: false,
  editingSmurf: false,
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
    case FETCH_SMURFS_FAILURE:
    return{
      ...state,
      fetchingSmurfs:false,
      error: action.payload
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
    case ADD_SMURFS_FAILURE:
    return{
      ...state,
      addingSmurf: false,
      error: action.payload
    }
    case DELETE_START:
    return{
      ...state,
      deletingSmurf: true,
    };
    case DELETE_SUCCESS:
    return{
      ...state,
      deletingSmurf: false,
      error: '',
      smurfs: action.payload,
    };
    case DELETE_FAILURE:
    return {
      ...state,
      deletingSmurf: false,
      error: action.payload
    };
    case EDIT_SMURF_START:
    return{
      ...state,
      editingSmurf: true
    };
    case EDIT_SMURF_SUCCESS:
    return{
      ...state,
      editingSmurf: false,
      error: '',
      smurfs: action.payload
    };
    case EDIT_SMURF_FAILURE:
      return {
        ...state,
        editingSmurf: false,
        error: action.payload
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
