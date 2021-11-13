import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadGames} from "./actions/dateAction";
import Home from "./pages/Home";

function App() {
   const dispatch = useDispatch();
   useEffect(()=>{
       dispatch(loadGames())
   })

  return (
    <div>
      <h1>Hello</h1>
      <Home/>
    </div>
  );
}

export default App;
