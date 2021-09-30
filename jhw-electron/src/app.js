import React from 'react';
import ReactDOM from 'react-dom';
import JHW_Editor from "./components/jhw_editor";
import JHW_Navbar from './components/jhw_navbar';

ReactDOM.render(<JHW_Navbar />, document.getElementById('nav'));
ReactDOM.render(<JHW_Editor />, document.getElementById("editor"));
