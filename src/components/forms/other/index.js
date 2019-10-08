import React, { useRef } from 'react';

const OtherForm = (props) => {
  const { dispatch, pageNumber } = props;
  const foodRef = useRef(null);

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
    if (fullNameRef.current.value && phoneRef.current.value && emailRef.current.value) {
      dispatch({
        type: 'validation',
        payload: {
          pageNumber,
          valid: true
        }
      })
    } else {
      dispatch({
        type: 'validation',
        payload: {
          pageNumber,
          valid: false
        }
      })
    }
  }

  const onChange = (e) => {
    updateField(dispatch, e);
    updateValidation();
  }


  return (
    <div>
      <select
        id="food"
        placeholder="select one"
        onChange={onChange}
        ref={foodRef}
      >
        <option value="hot dog">hot dog</option>
        <option value="sando">sando</option>
      </select>
    </div>
  )
}

export default OtherForm;
