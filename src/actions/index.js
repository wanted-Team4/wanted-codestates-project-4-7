export const SUBMIT_FORM = 'SUBMIT_FORM';
export const DELETE_FORM = 'DELETE_FORM';

export const submitForm = (formId, data) => {
  return {
    type: SUBMIT_FORM,
    payload: {
      formId,
      data,
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
