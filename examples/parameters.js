module.exports = {
  zip: { zip: 80301 },

  zpidWithZestimate: { zpid: 111111 },

  zpidWithComps: { zpid: 13177031 },

  // House with data for the 'GetUpdatedPropertyDetails' API. Will generate a 502 error
  zpidWithUpdates: { zpid: 13176378 },

  addressWithupdates: {
    address: "2512 Mapleton Ave.",
    // citystatezip: 'Boulder, CO'  // Can be city + state, or zip, or both
    citystatezip: "80304"
  },

  // House without data for the 'GetUpdatedPropertyDetails' API. Will generate a 502 error
  zpidWithoutUpdates: { zpid: 13177031 },

  addressWithoutUpdates: {
    address: "1619 Pine St.",
    citystatezip: "80301"
  },

  chart: { "unit-type": "percent", width: 400, height: 300 }
};
