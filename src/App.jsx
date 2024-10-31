import './App.css';
import MakeHooks from './Components/MakeHooks/MakeHooks';
import RefForm from './Components/RefForm/RefForm';
import ReusableForm from './Components/ReusbalFrom/ReusabalFrom';
import StateFulFrom from './Components/StatefulForm/StateFulFrom';
// import SimpoleFrom from './Components/SimpoleForm/SimpoleFrom';
function App() {
  const handleSignUpBtn = data => {
    // e.preventDefault();
    console.log(data);
  };
  const handleLoginBtn = data => {
    // e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpoleFrom /> */}
      {/* <StateFulFrom></StateFulFrom> */}
      {/* <RefForm /> */}
      {/* <MakeHooks></MakeHooks> */}
      <ReusableForm
        formTitle="Sign Up"
        submitBtnText="Sign Up"
        handleSubmit={handleSignUpBtn}
      >
        <h2>Sign up</h2>
      </ReusableForm>

      <ReusableForm
        formTitle="Login"
        submitBtnText="Login"
        handleSubmit={handleLoginBtn}
      >
        <h2>Login</h2>
      </ReusableForm>
    </>
  );
}

export default App;
