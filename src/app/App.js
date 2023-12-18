import {useEffect} from "react";
import {MainWrapper} from "../components/mainWrapper/mainWrapper";

import './App.css';
import {getInitLocalstorageDataEmpty, setDefaultLocalstorageData} from "../helpers/helpers";

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
    </div>
  );
}

export default App;
