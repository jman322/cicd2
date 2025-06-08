const request = require("supertest");

const app = require("./index");

describe("GET /health", () => {
    it("should return 200 status OK and a json response", async () => {
        const response = await request(app).get("/health");
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('status', 'OK');
        expect(response.body).toHaveProperty('timestamp');
        expect(response.body).toHaveProperty('uptime');
        expect(response.body).toHaveProperty('environment');
        expect(response.body).toHaveProperty('memory');
        expect(response.body).toHaveProperty('version');
    });
});

