import React, { useState } from 'react';
import ContactForm from './contact';
import OtherForm from './other';
import FormProvider, { FormContext } from './FormProvider';

const FormWrapper = () => {
  // state for each attribute
  const [currentPage, setCurrentPage] = useState(0);
  const [valid, setValid] = useState(false);

  // all form components
  const forms = [
    <ContactForm />,
    <OtherForm />
  ];

  // handle paging between forms
  const hasNextPage = currentPage < forms.length - 1;
  const hasLastPage = currentPage > 0;
  const nextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
      
    }
  }
  const lastPage = () => {
    if (hasLastPage) {
      setCurrentPage(currentPage - 1)
    }
  }

  // render 1 form at a time
  return (
    <FormProvider>
      <FormContext.Consumer>
        {/* attach dispatch and state to the dynamic 'current page' form via React Cloning */}
        {({dispatch, state}) => {
          console.log('validity check on form',  valid);
          return (
            <div>
              {React.cloneElement(forms[currentPage], { dispatch, state, setValid })}
              <button disabled={!hasLastPage} onClick={lastPage}>last</button>
              <button disabled={!hasNextPage || !valid} onClick={nextPage}>next</button>
            </div>
            );
          }
        }
      </FormContext.Consumer>
    </FormProvider>
  );
}

export default FormWrapper;
