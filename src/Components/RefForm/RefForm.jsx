import { useEffect, useRef } from 'react';

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const handelSubmit = e => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input ref={nameRef} type="text" name="name" placeholder="Fast name" />
        <br />
        <input
          type="email"
          ref={emailRef}
          defaultValue={'rakib@gmail.com'}
        />{' '}
        <br />
        <input type="password" ref={passwordRef} /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
