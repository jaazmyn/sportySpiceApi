// Import the dependencies for testing
import chai from "chai";
import chaiHttp from "chai-http";
import regeneratorRuntime from "regenerator-runtime";
import app from "../index";

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Posts", () => {
  describe("GET /posts", () => {
    // Test to get all posts records
    it("should get all post records", (done) => {
      chai
        .request(app)
        .get("/posts")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    // Test to get single post record
    it("should get a single post record by id", (done) => {
      const id = 1;
      chai
        .request(app)
        .get(`/posts/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});

// testy test
