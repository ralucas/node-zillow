export interface ApiMethodList {
  [key: string]: ApiMethod;
}
export interface ApiMethod {
  resultTag: string;
  requiredParams: string[];
}
const apiMethods: ApiMethodList = {
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
  }
};
export default function getMethod(method: string): ApiMethod {
  const foundMethod = apiMethods[method];
  if (foundMethod) {
    return foundMethod;
  }
  throw new Error(`Missing definition for method ${method}`);
}
