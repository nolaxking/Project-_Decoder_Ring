// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");
describe("caesar()errors",()=>{
    it("should return false if the shift amount is 0", () => {
        let input = "dustin";
        let  shift = 0;
        let actual = caesar(input, shift);
  
        expect(actual).to.be.false;
      });
  
      it("should return false if the shift amount is above 25", () => {
        let input = "dustin";
        let  shift = 26;
        let  actual = caesar(input, shift);
  
        expect(actual).to.be.false;
      });
  
      it("should return false if the shift amount is less than -25", () => {
        let input = "dustin";
        let  shift = -26;
        let  actual = caesar(input, shift);
  
        expect(actual).to.be.false;
      });
    });

