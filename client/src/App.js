import React from 'react';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {Test} from "./components/test"

function App() {



  const [ID, setID] = useState('');
  const [user_id, setuser_id] = useState('');
  const [user_passwd, setuser_passwd] = useState('');
  const [fisrtList, setFirstList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setFirstList(response.data);
      console.log(response.data);
    });
  }, []);

  const go = () => {
    Axios.post('http://localhost:3001/api/test', {
    ID: ID,
    user_id: user_id,
    user_passwd: user_passwd}).then(() => {
      alert("good");
    });
  };

  return ( 
    <div className='App'>
      <Link to="/test">Expenses</Link>
        <h1>Test_App</h1>

        <div className='form'>
            <label>ID</label>
            <input
             type="number"
             name="ID"
             onChange={(e) => {
              setID(e.target.value);
             }}
             />
            <label>USER_ID</label>
            <input
             type="text"
              name="user_id"
              onChange={(e) => {
                setuser_id(e.target.value);
               }}
              />
            <label>USER_PASSWD</label>
            <input
             type="password"
              name="user_passwd"
              onChange={(e) => {
                setuser_passwd(e.target.value);
               }}
              />
            <button onClick={go}>submit</button>

            {fisrtList.map((val) => {
              return (
                <h1>
                  id: {val.ID}
                </h1>
              );
            })}
        </div>
    </div>
  );
}

export default App;