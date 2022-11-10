import React, { useState } from "react";
// import Highlight from 'react-highlight';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
// const axios = require('axios').default;

function post(lang, data) {
  axios.post('/api.php', {
    lang: lang,
    text: data
  })
      .then(function (response) {
        console.log(response);
        this.popups(response.suggestions);
      })
      .catch(function (error) {
        console.log(error);
      });
}

function french(value) {
  return this.post('fr', value);
}
function italian(value) {
  return this.post('it', value);
}
function english(value) {
  return this.post('en-gb', value);
}
function App() {
  const frenchText = 'French';
  const italianText = 'Italian';
  const englishText = 'English (GB)';
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");


  return (<div>
    {frenchText}
    <ReactQuill className="editor-french" theme="snow" value={value} onChange={setValue} onKeyUp={this.french(value)}/>
    {italianText}
    <ReactQuill theme="snow" value={value1} onChange={setValue1} onKeyUp={this.italian(value1)}/>
    {englishText}
    <ReactQuill theme="snow" value={value2} onChange={setValue2} onKeyUp={this.english(value2)}/>
  </div>);
}

export default App;
