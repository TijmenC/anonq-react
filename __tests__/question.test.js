import { queryByTestId, render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from "axios";
import { MemoryRouter } from 'react-router-dom';
import React from "react"
import QuestionForm from "../src/components/QuestionForm"
import "regenerator-runtime/runtime.js";


import QuestionService from "../src/services/QuestionService";

jest.mock("../src/services/QuestionService");


describe("Question rendering test", () => {
  it.only('Test QuestionForm component renders', () => { 

       const mockFn = QuestionService.PostQuestion.mockImplementation(data => {
       console.log(data);
       return {data: {
         Code: "200"
       }}
       });

 const { queryByTestId } = render(<MemoryRouter initialEntries={["/"]}><QuestionForm /></MemoryRouter>);


    const inputTitle = queryByTestId("questionform-input-title");
    fireEvent.change(inputTitle, { target: { value: 'coolman' } });
    expect(inputTitle.value).toBe("coolman");

    const inputDescription = screen.getByTestId("questionform-input-description");
    fireEvent.change(inputDescription, { target: { value: 'Dit is een test beschrijving' } });
    expect(inputDescription.value).toBe("Dit is een test beschrijving");

    const inputTag = screen.getByTestId("questionform-input-tag");
    fireEvent.change(inputTag, { target: { value: 'Relationship' } });
    expect(inputTag.value).toBe("Relationship");

    const inputDeletetime = screen.getByTestId("questionform-input-deletetime");
    fireEvent.change(inputDeletetime, { target: { value: '12' } });
    expect(inputDeletetime.value).toBe("12");

    const inputComments = screen.getByTestId("questionform-input-comments");
    fireEvent.change(inputComments, { target: { value: 'false' } });
    expect(inputComments.value).toBe("false");



    const inputSubmit = screen.getByTestId("questionform-input-submit")
    fireEvent.click(inputSubmit);



    expect(mockFn).toHaveBeenCalledWith({question: { title: 'coolman', description: 'Dit is een test beschrijving', tag: 'Relationship', commentsenabled: false },
    poll: [],
    expiretime: 12 });
  })
});