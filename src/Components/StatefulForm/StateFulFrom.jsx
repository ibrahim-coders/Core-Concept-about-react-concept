import { useState } from 'react';

const StateFulFrom = () => {
  const [countEmail, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('');
  const handelSubmit = e => {
    e.preventDefault();
    // console.log('submit');
    if (password.length < 6) {
      setError('must be 6 numbers');
    } else {
      console.log(countEmail, name, password);
    }
  };

  const handelName = e => {
    setName(e.target.value);
  };

  const handelChange = e => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handelPasswordChange = e => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name="name" onChange={handelName} />
        <br />
        <input type="email" onChange={handelChange} /> <br />
        <input type="password" onChange={handelPasswordChange} required />
        <input type="submit" value="Submit" />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default StateFulFrom;
