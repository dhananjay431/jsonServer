import faker from "faker";
import $ from "jquery";
export class Faker {
  userSave(userData: any, type: any) {
    return $.ajax({
      url: "http://localhost:3000/users", // Url of backend (can be python, php, etc..)
      type: type, // data type (can be get, post, put, delete)
      data: JSON.parse(JSON.stringify(userData)),
    });
  }
  getData() {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      middleName: faker.name.middleName(),
      findName: faker.name.findName(),
      jobTitle: faker.name.jobTitle(),
      gender: faker.name.gender(),
      prefix: faker.name.prefix(),
      suffix: faker.name.suffix(),
      title: faker.name.title(),
      jobDescriptor: faker.name.jobDescriptor(),
      jobArea: faker.name.jobArea(),
      jobType: faker.name.jobType(),
      address: {
        zipCode: faker.address.zipCode(),
        city: faker.address.city(),
        cityPrefix: faker.address.cityPrefix(),
        citySuffix: faker.address.citySuffix(),
        cityName: faker.address.cityName(),
        streetName: faker.address.streetName(),
        streetAddress: faker.address.streetAddress(),
        streetSuffix: faker.address.streetSuffix(),
        streetPrefix: faker.address.streetPrefix(),
        secondaryAddress: faker.address.secondaryAddress(),
        county: faker.address.county(),
        country: faker.address.country(),
        countryCode: faker.address.countryCode(),
        state: faker.address.state(),
        stateAbbr: faker.address.stateAbbr(),
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
        direction: faker.address.direction(),
        cardinalDirection: faker.address.cardinalDirection(),
        ordinalDirection: faker.address.ordinalDirection(),
        nearbyGPSCoordinate: faker.address.nearbyGPSCoordinate(),
        timeZone: faker.address.timeZone(),
      },
    };
  }
}
