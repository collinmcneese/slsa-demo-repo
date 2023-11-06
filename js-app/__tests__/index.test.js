const { routeDefault, server } = require("../index");

describe("routeDefault", () => {
  it("should return 'Hello World!' when no query parameters are provided", () => {
    const req = { query: {} };
    const res = {
      send: jest.fn(),
    };
    routeDefault(req, res);
    expect(res.send).toHaveBeenCalledWith(
      expect.stringContaining("Hello World!")
    );
  });

  it("should return 'Hello World!' with query parameters when they are provided", () => {
    const req = { query: { name: "John", age: 30 } };
    const res = {
      send: jest.fn(),
    };
    routeDefault(req, res);
    expect(res.send).toHaveBeenCalledWith(
      expect.stringContaining("Hello World! {\"name\":\"John\",\"age\":30}")
    );
  });
});

afterAll(done => {
  server.close(done);
});
