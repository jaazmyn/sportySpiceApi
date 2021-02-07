import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Users", () => {
  describe("GET /users", () => {
    it("should get all user records", (done) => {
      chai
        .request(app)
        .get("/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("data");
          done();
        });
    });
  });

  describe("GET /users/:id", () => {
    it("should get a single user record by id", (done) => {
      const id = 1;
      chai
        .request(app)
        .get(`/users/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("data");
          res.body.data.should.have.length(1);
          done();
        });
    });
  });
});
