const request= require("supertest");
const app= require("./app");


describe("POST /user/login", () => {
  describe("Login", () => {

    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/user/login").send({
        email: "a@gmail.com",
        password: "a",
      })
      expect(response.statusCode).toBe(200)
    })
    test("wrong password", async () => {
        const response = await request(app).post("/user/login").send({
          email: "a@gmail.com",
          password: "ab",
        })
        expect(response.statusCode).toBe(400)
      })

      test("should respond with a 400 status code", async () => {
        const response = await request(app).post("/user/login").send({
          email: "ab@gmail.com",
          password: "a",
        })
        expect(response.statusCode).toBe(400)
      })

})
})



    describe("POST /user/create", () => {
        describe("Registration", () => {
          test("should respond with a 200 status code", async () => {
            const response = await request(app)
              .post("/user/create")
              .send({
                email: "test@gmail.com",
                password: "c11",
                confirm_password: "c11",
                name: "zishan",
                nid: "1234",
                contact_number: "1234"
                
              });
            expect(response.statusCode).toBe(200);
          });
        }); 
        describe("no email", () => {
            test("should respond with a 400 status code", async () => {
              const response = await request(app)
                .post("/user/create")
                .send({
                  email: "",
                  password: "c11",
                  confirm_password: "c11",
                  name: "zishan",
                  nid: "1234",
                  contact_number: "1234"
                  
                });
              expect(response.statusCode).toBe(400);
            });
          });
          
      });