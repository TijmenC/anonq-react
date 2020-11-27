import { queryByTestId, render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from "axios";
import { MemoryRouter } from 'react-router-dom';
import React from "react"
import Question from "../src/components/Question"
import "regenerator-runtime/runtime.js";


import QuestionService from "../src/services/QuestionService";

jest.mock("../src/services/QuestionService");


describe("Question rendering test", () => {
  it.only('Test Question component renders', () => { 
       
    const { getByText } = render(<MemoryRouter initialEntries={["/"]}><Question /></MemoryRouter>);
       const mockFn = QuestionService.PostQuestion.mockImplementation(data => {
       console.log(data);
       return {response: {status: 200}
       }
       });
       const inputTitle = getByText("Title");
       expect(inputTitle.value).toBe("Title");
  })
});