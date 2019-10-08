import React, { useReducer } from 'react';

export const FormContext = React.createContext();

const FormProvider = (props) => {
  const initialState = {
    fullName: '',
    phone: '',
    email: '',
    validForms: []
  };

  const formReducer = (state, action) => {
    console.log('hit reducer', action.payload.key, action.payload.value);
    switch (action.type) {
      case 'set':
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        };
      case 'validation':
        const validFormsUpdate = state.validForms;
        validFormsUpdate[action.payload.pageNumber] = action.payload.valid;
        return {
          ...state,
          validFormsUpdate
        }
      case 'reset':
        return initialState;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{state, dispatch}}>
      {props.children}
    </FormContext.Provider>
  )
};

export default FormProvider;
