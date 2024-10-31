const ReusableForm = ({ formTitle, submitBtnText, handleSubmit, children }) => {
  const handleLocalSubmit = e => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,

      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      {/* <h2>{formTitle}</h2> Corrected 'formTittle' to 'formTitle' */}
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReusableForm;
