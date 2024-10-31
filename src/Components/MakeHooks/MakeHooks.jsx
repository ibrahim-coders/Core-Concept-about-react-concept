import useInputState from './maks';

const MakeHooks = () => {
  const [name, handelChange] = useInputState('rakib');

  const handelSubmit = e => {
    console.log('form data', name);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input value={name} onChange={handelChange} type="text" name="name" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MakeHooks;
