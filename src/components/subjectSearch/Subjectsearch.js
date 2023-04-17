import React, { useEffect, useState } from "react";
import Subsearch from "./Subsearch";
import "./Subjectsearch.css";
import { Button, Input } from 'antd';

function Subjectsearch() {
  const [search, setsearch] = useState("");
  function Display() {
    
    function checkclick(event){
      const value = event.target.textContent;
      setsearch(value);
    }
    return (
      <div>
        <p onClick={checkclick}>Development</p> 
        <p onClick={checkclick}>Engineering</p>
        <p onClick={checkclick}>Politics</p>
        <p onClick={checkclick}>Harmony</p>
        <p onClick={checkclick}>HealthCare</p>
      </div>
    );
  }
  function handlebutton() {
    const inp = document.getElementById("val").value;
    setsearch(inp);
  }
  function handleclick(){
    setsearch("");
  }
  return (
    <div className="toolbar">
      <div className="input-button-container">
        <Input  id="val"  className="subsearch-input" placeholder="Search by Subject" />
        <Button onClick={handlebutton} className="subsearch-btn" type="primary" style={{marginRight: '10px'}}>Search</Button>
        <Button disabled={search.length==0} onClick={handleclick} className="subsearch-btn" type="primary">Back</Button>
        <hr />
      </div>
      {search.length == 0 ? <Display /> : <Subsearch inp={search} />}
    </div>
  );
  
}

export default Subjectsearch;
