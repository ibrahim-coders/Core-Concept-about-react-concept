const SimpoleFrom = () => {
  const handelSubmit = e => {
    e.preventDefault();
    console.log('submit');
    console.log(e.target.name.value);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpoleFrom;