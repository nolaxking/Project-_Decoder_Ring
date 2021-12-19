// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() submission tests written by Thinkful", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      
      const actual = substitution("message");
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      
      const alphabet = "short";
      const actual = substitution("message", alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "message";
      const alphabet = "abcabcabcabcabcabcabcabcab";
      const actual = substitution("message", alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution("message", alphabet);
      const expected = "ykrrpik";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution("message", alphabet);
      const expected = "ysii.rs";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution("my message", alphabet);
      const expected = "yp ysii.rs";

      expect(actual).to.equal(expected);
    });
  });
});