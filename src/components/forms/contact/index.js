import React, { useRef } from 'react';

const ContactForm = (props) =>  {
  const { dispatch, pageNumber, setValid } = props;
  const fullNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const updateField = (dispatch, e) => {
    dispatch({
      type: e.target.id,
      payload: {
        key: e.target.id,
        value: e.target.value
      }
    });
  }

  // simple validation
  const updateValidation = () => {
    console.log('valid', !!fullNameRef.current.value);
    setValid(fullNameRef.current.value && phoneRef.current.value && emailRef.current.value);
  }

  const onChange = (e) => {
    updateField(dispatch, e);
    updateValidation();
  }

  return (
    <div>
      <input
        id="fullName"
        type='text'
        placeholder='Full Name'
        onChange={onChange}
        ref={fullNameRef}
      />
      <input
        id="phone"
        type='phone'
        placeholder='8888888888'
        onChange={onChange}
        ref={phoneRef}
      />
      <input
        id="email"
        type='email'
        placeholder='placeholder@email.com'
        onChange={onChange}
        ref={emailRef}
      />
    </div>
  );
}

export default ContactForm;
