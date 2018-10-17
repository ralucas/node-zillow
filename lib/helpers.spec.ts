import { expect } from "chai";
import "mocha";
import * as mockData from "../test/mock_data";
import * as helpers from "./helpers";

describe("helpers", () => {
  describe("checkParams", () => {
    it("should return undefined", () => {
      expect(helpers.checkParams({ zpid: 11111 }, [])).to.be.undefined;
    });

    it("should throw error", () => {
      const fn = () => {
        helpers.checkParams({}, ["zpid"]);
      };
      expect(fn).to.throw(Error);
      expect(fn).to.throw(/Missing parameters/);
    });
  });

  describe("toQueryString", () => {
    const params = {
      test: "hello"
    };

    it("should return a string", () => {
      expect(helpers.toQueryString(params, "12345")).to.be.a("string");
    });

    it("should contain hello in the string", () => {
      expect(helpers.toQueryString(params, "12345")).to.contain("hello");
    });
  });

  describe("toJson", () => {
    const xml = mockData.mockXml;
    const testResult = helpers.toJson(xml);
    it("should return a promise object", () => {
      expect(testResult).to.be.a("object");
    });

    it("should have the correct top level", done => {
      testResult.then(res => {
        expect(res).to.include.keys("SearchResults:searchresults");
        done();
      });
    });

    it("should parse the xml correctly", done => {
      testResult.then(res => {
        expect(res["SearchResults:searchresults"]).to.include.keys(
          "$",
          "request",
          "message",
          "response"
        );
        // verify extra < that aren't cdata escaped
        expect(
          res["SearchResults:searchresults"]["message"][0].text[0]
        ).to.equal("Request successfully processed<");
        done();
      });
    });
  });

  describe("handleResponse", () => {
    const json = mockData.mockJson;
    const testResult = helpers.handleResponse(json);

    it("should return an object", () => {
      expect(testResult).to.be.an("object");
    });

    it("should not include the `$`", () => {
      expect(testResult).to.not.include.keys("$");
    });

    it("should include `request`, `response`, `message`", () => {
      expect(testResult).to.include.keys("request", "message", "response");
    });
  });
});
