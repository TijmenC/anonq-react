import { getByTestId, render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from "react";
import { MemoryRouter } from 'react-router-dom';
import Comment from "../src/components/Comment"


const questioninput = { text:"comment" }

describe("Comment rendering test", () => {
  it.only('Test Comment component renders', () => { 


    render(<Comment sentcomments={questioninput} />);

        const titleLabel = screen.getByTestId("question-label-comment");
        expect(titleLabel.value).toBe("Anonymous");
  })
});