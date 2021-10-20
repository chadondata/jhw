import React from 'react';
import ReactDOM from 'react-dom';
import JHW_Editor from "./components/jhw_editor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPenNib } from '@fortawesome/free-solid-svg-icons'

const menu_icon = <FontAwesomeIcon icon={faPenNib} />

ReactDOM.render(menu_icon, document.getElementById("menu_icon"));
ReactDOM.render(<JHW_Editor />, document.getElementById("editor"));
