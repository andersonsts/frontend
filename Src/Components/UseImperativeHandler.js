import React, { useRef, forwardRef, useImperativeHandle } from 'react';

import '../Hooks.css';

export default function UseImperativeHandler() {
  const formRef = useRef(null);

  function handleSubmit() {
    console.log(formRef.current.submit())
  }

  return (
    <div>
      <Form ref={formRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

const Form = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  function handleSubmit() {
    alert(inputRef.current.value);
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        submit: handleSubmit
      }
    },
    []
  );

  return (
    <form>
      <input ref={inputRef} />
    </form>
  )
});
