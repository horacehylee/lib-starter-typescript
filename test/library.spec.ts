import { Cat, Dog } from "./../src";

let lib;

describe("Given an instance of my Cat library", () => {
  beforeAll(() => {
    lib = new Cat();
  });
  describe("when I need the name", () => {
    it("should return the name", () => {
      expect(lib.name).toEqual("Cat");
    });
  });
});

describe("Given an instance of my Dog library", () => {
  beforeAll(() => {
    lib = new Dog();
  });
  describe("when I need the name", () => {
    it("should return the name", () => {
      expect(lib.name).toEqual("Dog");
    });
  });
});
