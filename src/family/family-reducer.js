import * as types from './family-actions';

const initialState = {
    family: {
        id: '',
        firstName: '',
        middleName: '',
        lastName:'',
        birthPlace: ''
    },
    isLoading: false
};

export const familyReducer = (state = initialState, action) => {
  switch (action.type) {
        case types.FETCH_FAMILY_REQUEST:
          return{...state, isLoading: true};
          case types.FETCH_FAMILY_SUCCESS:
          return{...state, isLoading: false, family: action.payload};
          case types.FETCH_FAMILY_FAIL:
          return{...state, loading: false};




      default:
          return state;
  }
};
