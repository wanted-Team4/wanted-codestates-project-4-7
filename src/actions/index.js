export const CREATE_FORM = "CREATE_FORM";
export const DELETE_FORM = "DELETE_FORM";
export const SUBMIT_FORM = "SUMBIT_FORM";

export const createForm = ({ formId, title, fields }) => {
  return {
    type: CREATE_FORM,
    payload: {
      form: {
        formId,
        title,
        fields,
        submitData: [],
      },
    },
  };
};

export const deleteForm = (formId) => {
  return {
    type: DELETE_FORM,
    payload: {
      formId,
    },
  };
};

export const submitForm = (formId, data) => {
  return {
    type: SUBMIT_FORM,
    payload: {
      formId,
      data,
    },
  };
};
