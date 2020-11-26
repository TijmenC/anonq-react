import React, { useState, useEffect } from "react";
import '../styling/Navigationbar.css';
import {Dropdown } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import Cookies from 'js-cookie'
function SavedQuestions() {

  const [questioncookies, setQuestioncookies] = useState([Cookies.get()])

  return (
    <Dropdown>
    <Dropdown.Toggle id="dropdown-basic">
      Questions
</Dropdown.Toggle>
    <Dropdown.Menu>
    {questioncookies.map((Cookies) => (
        <Dropdown.Item href="#/action-1">{Cookies.QuestionID}</Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
  )
}
export default SavedQuestions