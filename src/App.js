import './App.css';
import Navbar from './Navbar.js';
import About from './About.js';
import Experience from './Experience.js';
import Project from './Project.js';
import Contact from './Contact.js';
import axios from 'axios';
import { useEffect, useState } from 'react';

const tableMap = {
  0: process.env.REACT_APP_DEV_TABLE_ID,
  1: process.env.REACT_APP_ITEM_TABLE_ID,
}

function App() {

  let [tableID, setTableID] = useState(1);
  let [experiences, setExperiences] = useState([]); //let itemboxes be set to an empty array

  useEffect(() => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${tableMap[tableID]}`;

    const config = {
      headers : {
        "Authorization" : `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
      }
    };

    axios.get(url, config)
    .then(res => {
      let tableEntries = res.data.records;

      let items = [];
      tableEntries.forEach(record => {
        let entry = record.fields;
        let item = {
          name: entry["Name"],
          area: entry["Area"],
          description: entry["Description"],
        }
        items.push(item);
      });
      setExperiences(items);
    })
    .catch(err=> console.log(err))
  })
    return (
      <div className="App"> 
        <Navbar/> 
         
        <div id="Abou"> <About/> </div>
        <br></br>
        <hr className="Break"></hr>
        <div id="Exp"> <Experience/> </div>
        <hr className="Break"></hr>
        <div id="Proj"> <Project/> </div>
        <hr className="Break"></hr>
        <div id="Contacts"> <Contact/> </div>
      </div>
      
    );
}

export default App;