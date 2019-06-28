const request = require("supertest");

const server = require("./api/server.js");

describe("server", () => {
  describe("GET /", () => {
    it("should return status code 200", async () => {
      const res = await request(server).get("/");

      expect(res.status).toBe(200);
    });
    it("should return JSON", async () => {
      const res = await request(server).get("/");
      
      expect(res.type).toBe("application/json");
    });
    it('should return { message: "Server g2g" }', async () => {
      const res = await request(server).get("/");

      expect(res.body).toEqual({ message: "Server g2g" });
    });
  });
});
