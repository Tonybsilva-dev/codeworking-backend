import supertest from 'supertest';
import { app } from '../../../../shared/http/app';
import { createConnection } from '../../../../shared/infra/database/typeorm/typeormClient';

describe('Create User Controller', () => {

  const request = supertest(app)

  beforeAll(async () => {
    const connection = createConnection();
  })

  it("Should be able to create a new user", async () => {
    const response = await request.post("/users")
      .send({
        email: "user@example.com",
        name: "User Example",
        password: "123546"
      })
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id")
  });

  // it.skip("Should not be able to create a user with exists email", async () => {
  //   const response = await request(app).post("/users")
  //     .send({
  //       email: "user@example.com",
  //       name: "User Example"
  //     });

  //   const data = {
  //     "status": "error",
  //     "message": "Email address already used"
  //   }

  //   expect(response.status).toBe(400);
  // });
})
