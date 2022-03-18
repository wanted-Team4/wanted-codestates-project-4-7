import {
  CREATE_FORM,
  DELETE_FORM,
  SUBMIT_FORM,
  LOAD_FORM,
} from "../actions/index";
import { initialState } from "./initialState";

const kewordReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FORM: {
      return { forms: action.payload.fromdata };
    }
    case CREATE_FORM: {
      localStorage.setItem(
        "survey",
        JSON.stringify({
          ...state,
          forms: [...state.forms, action.payload.form],
        })
      );
      return {
        ...state,
        forms: [...state.forms, action.payload.form],
      };
    }
    case DELETE_FORM: {
      localStorage.setItem(
        "survey",
        JSON.stringify({
          ...state,
          forms: [
            ...state.forms.filter((el) => el.formId !== action.payload.formId),
          ],
        })
      );
      return {
        ...state,
        forms: [
          ...state.forms.filter((el) => el.formId !== action.payload.formId),
        ],
      };
    }
    case SUBMIT_FORM: {
      const forms = state.forms.map((item) => {
        if (item.formId === Number(action.payload.formId)) {
          localStorage.setItem(
            "survey",
            JSON.stringify({
              ...item,
              submitData: [...item.submitData, action.payload.data],
            })
          );
          return {
            ...item,
            submitData: [...item.submitData, action.payload.data],
          };
        }
        localStorage.setItem("survey", JSON.stringify(item));
        return item;
      });

      localStorage.setItem(
        "survey",
        JSON.stringify({
          ...state,
          forms,
        })
      );
      return {
        ...state,
        forms,
      };
    }
    default:
      return state;
  }
};

export default kewordReducer;
