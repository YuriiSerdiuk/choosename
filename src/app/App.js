import {useEffect} from "react";
import {MainWrapper} from "../components/mainWrapper/mainWrapper";

import './App.css';
import {getInitLocalstorageDataEmpty, setDefaultLocalstorageData} from "../helpers/helpers";
import SignUp from "../components/sign-up/SignUp";
import SignInSide from "../components/sign-in/SignInSide";

function App() {

  useEffect(() => {
    // set default localstorage data
    if (getInitLocalstorageDataEmpty()) {
      setDefaultLocalstorageData();
    }
  }, []);

  return (
    <div className="App">
      <MainWrapper/>
      {/*<SignUp/>*/}
      {/*<SignInSide/>*/}
    </div>
  );
}

export default App;
