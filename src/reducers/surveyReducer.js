import { CREATE_FORM, DELETE_FORM, SUBMIT_FORM } from '../actions/index';
import { initialState } from './initialState';

const surveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FORM: {
      return {
        ...state,
        forms: [...state.forms, action.payload.form],
      };
    }
    case DELETE_FORM: {
      return {
        ...state,
        forms: [
          ...state.forms.filter((el) => el.formId !== action.payload.formId),
        ],
      };
    }
    case SUBMIT_FORM: {
      const forms = state.forms.map((item) => {
        if (item.formId === action.payload.formId) {
          return {
            ...item,
            submitData: [...item.submitData, action.payload.data],
          };
        }
        return item;
      });

      return {
        ...state,
        forms,
      };
    }
    default:
      return state;
  }
};

export default surveyReducer;
