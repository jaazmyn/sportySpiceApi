// Import the dependencies for testing
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index";

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Posts", () => {
  describe("GET /posts", () => {
    it("should get all post records", (done) => {
      chai
        .request(app)
        .get("/posts")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("data");
          res.body.data.should.have.length.above(1);
          done();
        });
    });
  });

  describe("GET /posts/:id", () => {
    it("should get a single post record by id", (done) => {
      const id = 1;
      chai
        .request(app)
        .get(`/posts/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("data");
          res.body.data.should.have.length(1);
          done();
        });
    });
  });

  describe("GET /posts?search=a", () => {
    it("should get search results", (done) => {
      const search = "a";
      chai
        .request(app)
        .get(`/posts?search=${search}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("data");
          done();
        });
    });
  });

  describe("GET /posts?topic=Curling", () => {
    it("should get posts by topic name", (done) => {
      const topic = "Curling";
      chai
        .request(app)
        .get(`/posts?topic=${topic}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("data");
          done();
        });
    });
  });

  describe("GET /posts?sort=order:desc", () => {
    it("should get posts sorted by rating", (done) => {
      const topic = "order:desc";
      chai
        .request(app)
        .get(`/posts?sort=${topic}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("data");
          done();
        });
    });
  });
});
