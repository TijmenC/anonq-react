import { queryByTestId, render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from "axios";
import { MemoryRouter } from 'react-router-dom';
import React from "react"
import QuestionForm from "../src/components/QuestionForm"
import "regenerator-runtime/runtime.js";


import QuestionService from "../src/services/CommentService";

jest.mock("../src/services/CommentService");
// const questioninput = { title: "Title", description: 'Description', tag: 'Tag', commentsenabled: 'true' }

describe("Question rendering test", () => {
  it.only('Test QuestionForm component renders', () => { 

    //  const mockFn = QuestionService.PostQuestion.mockImplementation(data => {
    //  console.log(data);
    //  });
 const { queryByTestId } = render(<QuestionForm />);


    const inputEmail = queryByTestId("questionform-input-title");
    fireEvent.change(inputEmail, { target: { value: 'coolman' } });
    expect(inputEmail.value).toBe("coolman");

    const inputPassword = screen.getByTestId("login-input-password");
    fireEvent.change(inputPassword, { target: { value: 'secretP@ssw0rd!' } });
    expect(inputPassword.value).toBe("secretP@ssw0rd!");

    const inputSubmit = screen.getByTestId("login-input-submit")
    fireEvent.click(inputSubmit);
    expect(mockFn).toHaveBeenCalledWith({ email: 'test@email.com', password: 'secretP@ssw0rd!' });
  })
});