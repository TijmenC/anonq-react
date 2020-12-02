import React, { useState } from "react";
import '../styling/Navigationbar.css';
import { Dropdown } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import Cookies from 'js-cookie'
function SavedQuestions() {

  const [questioncookies, setQuestioncookies] = useState(Cookies.get)
  const getCookies = () => {
    setQuestioncookies(Cookies.get())
  }

  return (
    <Dropdown onClick={getCookies}>
      <Dropdown.Toggle size="sm" id="dropdown-basic">
        Questions
</Dropdown.Toggle>
      <Dropdown.Menu>
      <Link to={"/" + questioncookies.QuestionID}>
          <Dropdown.Item href="#/action-1">Your Question</Dropdown.Item>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default SavedQuestions