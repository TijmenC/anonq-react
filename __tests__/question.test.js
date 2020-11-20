import { getByTestId, render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Question from "../src/components/Question"

import QuestionService from "../src/services/QuestionService";

jest.mock("../src/services/QuestionService");
const questioninput = { title: "Title", description: 'Description', tag: 'Tag', commentsenabled: 'true' }

describe("Question rendering test", () => {
  it.only('Test Question component renders', () => { 


    render(<Question question={questioninput} />);

        const titleLabel = screen.getByTestId("question-label-title");
        expect(titleLabel.value).toBe("Title");
  })
});