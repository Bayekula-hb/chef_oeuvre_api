import {describe, expect, test} from '@jest/globals';
const port = process.env.PORT;
//const staffRouter = require("../routers/staffs.router")
import App from "../index"


describe("Welcome Message", () => {
    test("Racine router", async () => {
        const data = await App;
        console.log(data);
        //expect(data).toEqual("Welcome to the Lopango Infos")

    })
    test('test 3', () => console.log('test 3'));
});

