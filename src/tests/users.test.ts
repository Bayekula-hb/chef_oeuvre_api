const { decribe, except, test } = require("jest")
const staffRouter = require("../routers/staffs.router")

decribe("All users", () => {
    test("I get all users", async () => {
        const data = await staffRouter("/All");
        return data

    })
})

