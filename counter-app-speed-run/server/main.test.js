const fetch = require("cross-fetch");

const REQUEST_URL = "http://localhost:3000/";

const makeRequest = async () => {
  return fetch(REQUEST_URL, {
    method: "post",
  }).then((res) => res.json());
};

const runNTimes = async (times, method) => {
  while (times > 0) {
    await method();
    times = times - 1;
  }
};

describe("server counter", () => {
  it("should return a count of 1 on first load", async () => {
    const response = await makeRequest();

    expect(response).toEqual({
      count: 1,
    });
  });

  it("should return an incremented count on subsequent loads", async () => {
    await runNTimes(2, makeRequest);
    const response = await makeRequest();

    expect(response).toEqual({
      count: 4,
    });
  });

  it("should reset to a count of one after the thirteenth request", async () => {
    await runNTimes(7, makeRequest);
    const response = await makeRequest();

    expect(response).toEqual({
      count: 12,
    });

    const resetResponse = await makeRequest();

    expect(resetResponse).toEqual({
      count: 1,
    });
  });

  afterAll(async () => {
    // Reset, leaving the count on 12, so the tests can be run again
    await runNTimes(10, makeRequest);
    const response = await makeRequest();

    expect(response).toEqual({
      count: 12,
    });
  });
});
