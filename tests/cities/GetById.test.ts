import { StatusCodes } from "http-status-codes"
import { testServer } from "../jest.setup"

describe("Cities - DeleteById", () => {

  it("Get records by Id", async () => {
    const  res1 = await testServer.post("/cities").send({name: "Joinville"})

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resSearch = await testServer.get(`./cities/${res1.body}`).send();

    expect(resSearch.statusCode).toEqual(StatusCodes.OK);
    expect(resSearch.body).toHaveProperty("name");
  });

  it("Try search records that not exist", async () => {
    const  res1 = await testServer.get("/cities/9999").send({name: "Joinville"})

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty("errors.default");
  });
})