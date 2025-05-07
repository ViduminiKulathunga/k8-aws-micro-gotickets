import request from "supertest";
import { app } from "../../app";

it("return a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "vidu@gmail.com",
      password: "1234",
    })
    .expect(201);
});
