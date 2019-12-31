
/* action types */

import {getFamily, deleteFamilyById} from "./family-service";

export const FETCH_FAMILY_REQUEST = 'FETCH_FAMILY_REQUEST';
export const FETCH_FAMILY_SUCCESS = 'FETCH_FAMILY_SUCCESS';
export const FETCH_FAMILY_FAIL = 'FETCH_FAMILY_FAIL';

export const DELETE_FAMILY_REQUEST = 'DELETE_FAMILY_REQUEST';
export const DELETE_FAMILY_SUCCESS = 'DELETE_FAMILY_SUCCESS';
export const DELETE_FAMILY_FAIL = 'DELETE_FAMILY_FAIL';

export const ADD_FAMILY_REQUEST = 'ADD_FAMILY_REQUEST';
export const ADD_FAMILY_SUCCESS = 'ADD_FAMILY_SUCCESS';
export const ADD_FAMILY_FAIL = 'ADD_FAMILY_FAIL';

/* action creators : thunk version  */

export const fetchFamily = () => {
  return async (dispatch) => {
      dispatch ({
          type: FETCH_FAMILY_REQUEST
      });
      try {
          const {data}= await getFamily();
          dispatch({type: FETCH_FAMILY_SUCCESS, payload: data})
      }catch (e) {
          console.log(e.message);
          dispatch({type: FETCH_FAMILY_FAIL, payload: e.message})
      }
  }
};

export const eraseFamilyById = (id) => {
  return async dispatch => {
      dispatch({type: DELETE_FAMILY_REQUEST});

      try{
          await deleteFamilyById(id);
          dispatch({type: DELETE_FAMILY_SUCCESS, payload: id})
      } catch (e) {
          console.log(e.message);
          dispatch({type: DELETE_FAMILY_FAIL})
      }
  }
};


