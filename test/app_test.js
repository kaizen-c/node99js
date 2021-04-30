const app = require("../app");
const calculator = require("../service");
const request = require("request");
const assert = require("assert");

describe("the test", function () {
  this.beforeAll((done) => app.start(done));
  this.afterAll((done) => app.stop(done));

 


  it("Should be able to call subtract end point", function (done) {
    const req = {
      json: true,
      uri: "http://localhost:3000/subtract?a=1&b=2",
    };

    request.get(req, (error, res, body) => {
      if (error) return done(error);
      if (res.statusCode !== 200)
        return done(new Error(`oh no! ${res.statusCode}`));
      console.log("body", body);
      assert.strictEqual(body.operation, "subtract");
      assert.strictEqual(body.result, -1);
      done();
    });
  });
});
