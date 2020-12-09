import { queryByTestId, render, screen, waitFor, fireEvent, getByText, toContainObject} from '@testing-library/react';
import axios from "axios";
import { MemoryRouter } from 'react-router-dom';
import React from "react"
import Question from "../src/components/Question"
import "regenerator-runtime/runtime.js";


import QuestionService from "../src/Services/questionservice";
import Poll from '../src/components/Poll';

jest.mock("../src/Services/questionservice");

const mockQuestion = { title: 'Title', description: 'Description', tag: 'Relationship', commentsenabled: 'false' }
const mockPolls = [{ poll: 'Answer 1'}, {poll: "Answer 2"}]

describe("Question rendering test", () => {
  it.only('Test Question component renders', () => { 
       
    const { getByTestId } = render(<MemoryRouter initialEntries={["/"]}><Question question={mockQuestion} polls={mockPolls} /></MemoryRouter>);
       const mockFn = QuestionService.PostQuestion.mockImplementation(data => {
       console.log(data);
       return {response: {status: 200}
       }
       });
       const labelTitle = getByTestId("question-label-title");
       expect(labelTitle.textContent).toBe(mockQuestion.title);
       const labelDescription = getByTestId("question-label-description");
       expect(labelDescription.textContent).toBe(mockQuestion.description);
        const labelFirstPoll = getByTestId("0");
        const labelSecondPoll = getByTestId("1");
       expect(labelFirstPoll.textContent).toBe(mockPolls[0].poll)
       expect(labelSecondPoll.textContent).toBe(mockPolls[1].poll)
     
  })
});