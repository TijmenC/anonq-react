import axios from "axios"
// import HomePage from "../src/pages/HomePage"

jest.mock('axios')

describe("Subject routing tests", () => {

    it("Should get all questions", async () => {
        const questions = [
        {
            question: { title: 'Title', description: 'Description', tag: 'Tag', commentsenabled: 'true' },
            poll: [{ poll: 'poll' }]
        },
        {
            question: { title: 'Title2', description: 'Description2', tag: 'Tag2', commentsenabled: 'true' },
            poll: [{ poll: 'poll2' }]
        }

        ]
        const resp = {data: questions}
        axios.get.mockResolvedValue(resp)
        return HomePage.useEffect().then(data => expect(data).ToEqual(questions))
      
       
    });
})