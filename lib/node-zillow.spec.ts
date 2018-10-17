import nodeZillow from "./node-zillow";
import { expect } from "chai";
import "mocha";
import nock from "nock";
import {
  mockGetDeepSearchResults,
  mockGetUpdatedPropertyDetailsNoUpdates,
  mockGetUpdatedPropertyDetailsUpdates,
  mockGetDemographicData,
  mockGetDeepComps,
  mockGetZestimate
} from "../test/mock_data";

describe("Zillow", () => {
  describe("constructor", () => {
    it("should be a function", () => {
      expect(typeof nodeZillow).to.equal("function");
    });
  });

  describe("an instance of", () => {
    it("zillow should be an instanceof Zillow", () => {
      const zillow = new nodeZillow("test");
      expect(zillow).to.be.an.instanceof(nodeZillow);
    });
  });

  const params = {
    address: "1619 Pine St.",
    city: "Boulder",
    state: "Colorado",
    zip: "80301"
  };

  const zwsid = "feedbeef";

  describe("getDeepSearchResults", () => {
    const zillow = new nodeZillow(zwsid);
    const parameters = {
      address: params.address,
      citystatezip: `${params.city}, ${params.state} ${params.zip}`
    };

    nock("http://www.zillow.com")
      .get(/GetDeepSearchResults.htm/)
      .reply(200, mockGetDeepSearchResults);

    const test = zillow.get("GetDeepSearchResults", parameters);

    it("should be a json object", done => {
      test.then(result => {
        expect(result).to.be.an("object");
        expect(result).to.include.keys("message", "request", "response");
        done();
      });
    });

    it("should return a success message", done => {
      test.then(result => {
        expect(result["message"]["text"]).to.equal(
          "Request successfully processed"
        );
        done();
      });
    });

    it("should return 0", done => {
      test.then(result => {
        expect(result["message"]["code"]).to.equal("0");
        done();
      });
    });
  });

  describe("getUpdatedPropertyDetails", () => {
    const zillow = new nodeZillow(zwsid);

    nock("http://www.zillow.com")
      .get(/GetUpdatedPropertyDetails.htm/)
      .reply(200, mockGetUpdatedPropertyDetailsNoUpdates);

    // Mork and Mindy's house, no updates (1619 Pine St, Boulder, CO, zpid: 13177031)
    const failTest = zillow.get("GetUpdatedPropertyDetails", {
      zpid: 13177031
    });

    it("should return a json object even without updated data", done => {
      failTest.then(result => {
        expect(result).to.be.an("object");
        done();
      });
    });

    it("should return a message telling us there is no updated data", done => {
      failTest.then(result => {
        expect(result["message"]["text"]).to.contain(
          "Error: no updated data is available for this property"
        );
        done();
      });
    });

    it("should return a 502", done => {
      failTest.then(result => {
        expect(result["message"]["code"]).to.equal("502");
        done();
      });
    });

    nock("http://www.zillow.com")
      .get(/GetUpdatedPropertyDetails.htm/)
      .reply(200, mockGetUpdatedPropertyDetailsUpdates);

    // House with updates. 2512 Mapleton Ave. Boulder, CO 80304. zpid: 13176378
    const passTest = zillow.get("GetUpdatedPropertyDetails", {
      zpid: 13176378
    });

    it("should return a json object", done => {
      passTest.then(result => {
        expect(result).to.be.an("object");
        done();
      });
    });

    it("should return a success message", done => {
      passTest.then(result => {
        expect(result["message"]["text"]).to.equal(
          "Request successfully processed"
        );
        done();
      });
    });

    it("should return 0", done => {
      passTest.then(result => {
        expect(result["message"]["code"]).to.equal("0");
        done();
      });
    });
  });

  describe("getDemographics", () => {
    const zillow = new nodeZillow(zwsid);

    const parameters = {
      zip: params.zip
    };

    nock("http://www.zillow.com")
      .get(/GetDemographics.htm/)
      .reply(200, mockGetDemographicData);

    const test = zillow.get("GetDemographics", parameters);

    it("should be a json object", done => {
      test.then(result => {
        expect(result).to.be.an("object");
        done();
      });
    });

    it("should return a success message", done => {
      test.then(result => {
        expect(result["message"]["text"]).to.equal(
          "Request successfully processed"
        );
        done();
      });
    });

    it("should return 0", done => {
      test.then(result => {
        expect(result["message"]["code"]).to.equal("0");
        done();
      });
    });
  });

  describe("get", () => {
    const zillow = new nodeZillow(zwsid);

    describe("GetDeepComps", () => {
      const parameters = {
        zpid: 13177031,
        count: 10
      };

      nock("http://www.zillow.com")
        .get(/GetDeepComps.htm/)
        .reply(200, mockGetDeepComps);

      const test = zillow.get("GetDeepComps", parameters);

      it("should be a json object", done => {
        test.then(result => {
          expect(result).to.be.an("object");
          done();
        });
      });

      it("should return a success message", done => {
        test.then(result => {
          expect(result["message"]["text"]).to.equal(
            "Request successfully processed"
          );
          done();
        });
      });

      it("should return 0", done => {
        test.then(result => {
          expect(result["message"]["code"]).to.equal("0");
          done();
        });
      });

      it("should not throw an error", done => {
        const testError = () => test;

        expect(testError).to.not.throw(Error);
        done();
      });

      it("should throw an error without parameters", done => {
        const testError = () => {
          zillow.get("GetDeepComps");
        };
        expect(testError).to.throw(Error);
        done();
      });

      it("should throw an error with a missing parameter", done => {
        const parameters = { zpid: 111111 };
        const testError = () => {
          zillow.get("GetDeepComps", parameters);
        };
        expect(testError).to.throw(Error);
        expect(testError).to.throw(/Missing parameter/);
        done();
      });
    });

    describe("GetDeepSearchResults", () => {
      const parameters = {
        address: params.address,
        citystatezip: `${params.city}, ${params.state} ${params.zip}`
      };

      it("should return an object", done => {
        nock("http://www.zillow.com")
          .get(/GetDeepSearchResults.htm/)
          .reply(200, mockGetDeepSearchResults);

        zillow.get("GetDeepSearchResults", parameters).then(data => {
          expect(data).to.be.an("object");
          done();
        });
      });
    });

    describe("GetZestimate", () => {
      const zillow = new nodeZillow(zwsid);
      const parameters = {
        zpid: 1111111
      };

      it("should return a zestimate", done => {
        nock("http://www.zillow.com")
          .get(/GetZestimate.htm/)
          .reply(200, mockGetZestimate);
        zillow.get("GetZestimate", parameters).then(results => {
          expect(results).to.be.an("object");
          done();
        });
      });
    });
  });
});
