import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cities - GetAll", ()=> {
  
  it("Search all records", async () => {
    const  res1 = await testServer.post('/cidade').send({ name: "Joinville"});

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resSearch = await testServer.get('/cities').send();

    expect(Number(resSearch.header['x-total-count'])).toBeGreaterThan(0);
    expect(resSearch.statusCode).toEqual(StatusCodes.OK);  
    expect(resSearch.body.length).toBeGreaterThan(0)
  })
})