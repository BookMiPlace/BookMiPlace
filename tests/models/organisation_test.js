'use strict';

const expect = require('chai').expect;
const faker = require('faker');

describe('models/organisation', () => {
  before(() => {
    return require('../../models').sequelize.sync({ force: true });
  });

  beforeEach(() => {
    this.Organisation = require('../../models').Organisation;
  });

  describe('create', () => {

    context('valid and successful', () => {
      const city = faker.address.city();
      const county = faker.address.county();
      const country = faker.address.country();
      const name = faker.company.companyName();
      const phoneNumber = faker.phone.phoneNumber();
      const postCode = faker.address.zipCode();
      const streetAddress = faker.address.streetAddress();
      const taxNumber = String(faker.random.number());
      

      it('creates an organisation', () => {
        return this.Organisation.create({
          city: city,
          county: county,
          country: country,
          name: name,
          phoneNumber: phoneNumber,
          postCode: postCode,
          streetAddress: streetAddress,
          taxNumber: taxNumber
        }).bind(this).then((organisation) => {

          expect(organisation.city).to.equal(city);
          expect(organisation.county).to.equal(county);
          expect(organisation.country).to.equal(country);
          expect(organisation.name).to.equal(name);
          expect(organisation.phoneNumber).to.equal(phoneNumber);
          expect(organisation.postCode).to.equal(postCode);
          expect(organisation.streetAddress).to.equal(streetAddress);
          expect(organisation.taxNumber).to.equal(taxNumber);

        });
      });
    });

    context('invalid and unsuccessful', () => {

      context('no name provided', () => {

        it('should throw a validation error', () => {
          return this.Organisation.create({ name: '1' }).bind(this).then((organisation) => {
            //TODO This isn't really testing anything
            expect.fail();
          })
          .catch(function (err) {

            expect(err['name']).to.be.equal('AssertionError');
          });
        });
      });
    });
  });
});