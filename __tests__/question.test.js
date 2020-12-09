import { queryByTestId, render, screen, waitFor, fireEvent, getByText, toContainObject } from '@testing-library/react';
import * as axios from "axios";
import { MemoryRouter } from 'react-router-dom';
import React from "react"
import Question from "../src/components/Question"
import "regenerator-runtime/runtime.js";


import PollService from "../src/Services/PollService";

import Poll from '../src/components/Poll';
import commenapi from "../src/common-api"



jest.mock("../src/Services/PollService");
jest.mock("../src/common-api");
jest.mock("axios");



const mockQuestion = { title: 'Title', description: 'Description', tag: 'Relationship', commentsenabled: 'false' }
const mockPolls = [{ id: 27, questionId: 24, poll: 'Answer 1', votes: 0, percentage: "" }, { id: 28, questionId: 24, poll: 'Answer 2', votes: 2, percentage: ""  }]

describe("Question rendering test", () => {
    it.only('Test Question component renders', () => {

        const { getByTestId } = render(<MemoryRouter initialEntries={["/"]}><Question question={mockQuestion} polls={mockPolls} /></MemoryRouter>);
        const labelTitle = getByTestId("question-label-title");
        expect(labelTitle.textContent).toBe(mockQuestion.title);
        const labelDescription = getByTestId("question-label-description");
        expect(labelDescription.textContent).toBe(mockQuestion.description);
        const labelFirstPoll = getByTestId("0");
        const labelSecondPoll = getByTestId("1");
        expect(labelFirstPoll.textContent).toBe(mockPolls[0].poll)
        expect(labelSecondPoll.textContent).toBe(mockPolls[1].poll)

    })

    it.only('Test Question component renders + Poll percentages (When clicked)', () => {


        const { getByTestId, getAllByTestId, getByText } = render(<MemoryRouter initialEntries={["/"]}><Question question={mockQuestion} polls={mockPolls} /></MemoryRouter>);
        //  PollsService.PutPollsVotes.mockImplementation(data => {
        //     console.log(data);
        //     return {
        //         response: { status: 200 }
        //     }
        // });
        PollService.GetPollPercentages.mockImplementation(() => Promise.resolve({
            response: { status: 200 },
            data:
                [
                    {
                        id: 27,
                        questionId: 24,
                        poll: 1,
                        votes: 0,
                        percentage: 0
                    },
                    {
                        id: 28,
                        questionId: 24,
                        poll: 1,
                        votes: 2,
                        percentage: 100
                    }
                ]
        }))
        // PollService.GetPollPercentages.mockImplementation(() => Promise.reject({
        //     response: { status: 400 }
        // }))
        PollService.PutPollsVotes.mockImplementation(() => Promise.resolve({
            response: { status: 200 },
            data:
            {
                poll: "changed"
            }
        }));
        const labelTitle = getByTestId("question-label-title");
        expect(labelTitle.textContent).toBe(mockQuestion.title);
        const labelDescription = getByTestId("question-label-description");
        expect(labelDescription.textContent).toBe(mockQuestion.description);
        const labelFirstPoll = getByTestId("0");
        const labelSecondPoll = getByTestId("1");
        expect(labelFirstPoll.textContent).toBe(mockPolls[0].poll)
        expect(labelSecondPoll.textContent).toBe(mockPolls[1].poll)


        const voteButton = getByTestId("poll-button-vote0")
        fireEvent.click(voteButton)

        //  const labelPercentage = getByTestId("poll-label-percentage0");
        //  expect(labelPercentage).toBe(0)

    })
});