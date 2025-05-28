
const request = require("supertest");


const app = require("./index");

describe("GET /health", () => {
    it("should return 200 status OK and a json responce", async () => {
        const response = await request(app).get("/health");
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            status: "OK"
        });
    });
});

