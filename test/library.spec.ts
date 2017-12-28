process.env.NODE_ENV = 'test';
import 'mocha';
import { assert, expect, should } from 'chai';
should();
import * as sinon from 'sinon';
import { SinonStub } from 'sinon';

import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
import * as shallowDeepEqual from 'chai-shallow-deep-equal';
import * as chaiAsPromised from 'chai-as-promised';
chai.use(sinonChai);
chai.use(shallowDeepEqual);
chai.use(chaiAsPromised);

import { Cat, Dog } from './../src';
let lib;

describe('Given an instance of my Cat library', () => {
  before(() => {
    lib = new Cat();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Cat');
    });
  });
});

describe('Given an instance of my Dog library', () => {
  before(() => {
    lib = new Dog();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Dog');
    });
  });
});
