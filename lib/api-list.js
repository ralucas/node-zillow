module.exports = {
  GetDeepSearchResults: {
    resultTag: "SearchResults:searchresults",
    requiredParams: ["address", "citystatezip"]
  },
  GetUpdatedPropertyDetails: {
    resultTag: "UpdatedPropertyDetails:updatedPropertyDetails",
    requiredParams: ["zpid"]
  },
  GetDeepComps: {
    resultTag: "Comps:comps",
    requiredParams: ["zpid", "count"]
  },
  GetRateSummary: {
    resultTag: "RateSummary:rateSummary",
    requiredParams: []
  },
  GetMonthlyPayments: {
    resultTag: "MonthlyPayments:paymentsSummary",
    requiredParams: ["price"]
  },
  GetDemographics: {
    resultTag: "Demographics:demographics",
    requiredParams: []
  },
  GetRegionChildren: {
    resultTag: "RegionChildren:regionchildren",
    requiredParams: []
  },
  GetRegionChart: {
    resultTag: "RegionChart:regionchart",
    requiredParams: ["unit-type"]
  },
  GetSearchResults: {
    resultTag: "SearchResults:searchresults",
    requiredParams: ["address", "citystatezip"]
  },
  GetZestimate: {
    resultTag: "Zestimate:zestimate",
    requiredParams: ["zpid"]
  },
  GetChart: {
    resultTag: "Chart:chart",
    requiredParams: ["zpid", "unit-type"]
  },
  GetComps: {
    resultTag: "Comps:comps",
    requiredParams: ["zpid", "count"]
  },
  ProReviews: {
    resultTag: "Reviews:reviews",
    requiredParams: ["screenname"]
  }
};
