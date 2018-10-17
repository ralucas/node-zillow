export const mockXml =
  '<SearchResults:searchresults xsi:schemaLocation="http://www.zillow.com/static/xsd/SearchResults.xsd /vstatic/ae1bf8a790b67ef2e902d2bc04046f02/static/xsd/SearchResults.xsd"> <request> <address>2114 Bigelow Ave</address> <citystatezip>Seattle, WA</citystatezip> </request> <message> <text>Request successfully processed</text> <code>0</code> </message> <response> <results> <result> <zpid>48749425</zpid> <links> <homedetails> http://www.zillow.com/homedetails/2114-Bigelow-Ave-N-Seattle-WA-98109/48749425_zpid/ </homedetails> <graphsanddata> http://www.zillow.com/homedetails/charts/48749425_zpid,1year_chartDuration/?cbt=7522682882544325802%7E9%7EY2EzX18jtvYTCel5PgJtPY1pmDDLxGDZXzsfRy49lJvCnZ4bh7Fi9w** </graphsanddata> <mapthishome>http://www.zillow.com/homes/map/48749425_zpid/</mapthishome> <comparables>http://www.zillow.com/homes/comps/48749425_zpid/</comparables> </links> <address> <street>2114 Bigelow Ave N</street> <zipcode>98109</zipcode> <city>Seattle</city> <state>WA</state> <latitude>47.63793</latitude> <longitude>-122.347936</longitude> </address> <zestimate> <amount currency="USD">1219500</amount> <last-updated>11/03/2009</last-updated> <oneWeekChange deprecated="true"/> <valueChange duration="30" currency="USD">-41500</valueChange> <valuationRange> <low currency="USD">1024380</low> <high currency="USD">1378035</high> </valuationRange> <percentile>0</percentile> </zestimate> <localRealEstate> <region id="271856" type="neighborhood" name="East Queen Anne"> <zindexValue>525,397</zindexValue> <zindexOneYearChange>-0.144</zindexOneYearChange> <links> <overview> http://www.zillow.com/local-info/WA-Seattle/East-Queen-Anne/r_271856/ </overview> <forSaleByOwner> http://www.zillow.com/homes/fsbo/East-Queen-Anne-Seattle-WA/ </forSaleByOwner> <forSale> http://www.zillow.com/east-queen-anne-seattle-wa/ </forSale> </links> </region> <region id="16037" type="city" name="Seattle"> <zindexValue>381,764</zindexValue> <zindexOneYearChange>-0.074</zindexOneYearChange> <links> <overview> http://www.zillow.com/local-info/WA-Seattle/r_16037/ </overview> <forSaleByOwner>http://www.zillow.com/homes/fsbo/Seattle-WA/</forSaleByOwner> <forSale>http://www.zillow.com/seattle-wa/</forSale> </links> </region> <region id="59" type="state" name="Washington"> <zindexValue>263,278</zindexValue> <zindexOneYearChange>-0.066</zindexOneYearChange> <links> <overview> http://www.zillow.com/local-info/WA-home-value/r_59/ </overview> <forSaleByOwner>http://www.zillow.com/homes/fsbo/WA/</forSaleByOwner> <forSale>http://www.zillow.com/wa/</forSale> </links> </region> </localRealEstate> </result> </results> </response> </SearchResults:searchresults>';

export const mockJson = {
  "SearchResults:searchresults": {
    $: {
      "xsi:schemaLocation":
        "http://www.zillow.com/static/xsd/SearchResults.xsd /vstatic/ae1bf8a790b67ef2e902d2bc04046f02/static/xsd/SearchResults.xsd"
    },
    request: [{ address: ["2114 Bigelow Ave"], citystatezip: ["Seattle, WA"] }],
    message: [{ text: ["Request successfully processed"], code: ["0"] }],
    response: [
      {
        results: [
          {
            result: [
              {
                zpid: ["48749425"],
                links: [
                  {
                    homedetails: [
                      " http://www.zillow.com/homedetails/2114-Bigelow-Ave-N-Seattle-WA-98109/48749425_zpid/ "
                    ],
                    graphsanddata: [
                      " http://www.zillow.com/homedetails/charts/48749425_zpid,1year_chartDuration/?cbt=7522682882544325802%7E9%7EY2EzX18jtvYTCel5PgJtPY1pmDDLxGDZXzsfRy49lJvCnZ4bh7Fi9w** "
                    ],
                    mapthishome: [
                      "http://www.zillow.com/homes/map/48749425_zpid/"
                    ],
                    comparables: [
                      "http://www.zillow.com/homes/comps/48749425_zpid/"
                    ]
                  }
                ],
                address: [
                  {
                    street: ["2114 Bigelow Ave N"],
                    zipcode: ["98109"],
                    city: ["Seattle"],
                    state: ["WA"],
                    latitude: ["47.63793"],
                    longitude: ["-122.347936"]
                  }
                ],
                zestimate: [
                  {
                    amount: [{ _: "1219500", $: { currency: "USD" } }],
                    "last-updated": ["11/03/2009"],
                    oneWeekChange: [{ $: { deprecated: "true" } }],
                    valueChange: [
                      { _: "-41500", $: { duration: "30", currency: "USD" } }
                    ],
                    valuationRange: [
                      {
                        low: [{ _: "1024380", $: { currency: "USD" } }],
                        high: [{ _: "1378035", $: { currency: "USD" } }]
                      }
                    ],
                    percentile: ["0"]
                  }
                ],
                localRealEstate: [
                  {
                    region: [
                      {
                        $: {
                          id: "271856",
                          type: "neighborhood",
                          name: "East Queen Anne"
                        },
                        zindexValue: ["525,397"],
                        zindexOneYearChange: ["-0.144"],
                        links: [
                          {
                            overview: [
                              " http://www.zillow.com/local-info/WA-Seattle/East-Queen-Anne/r_271856/ "
                            ],
                            forSaleByOwner: [
                              " http://www.zillow.com/homes/fsbo/East-Queen-Anne-Seattle-WA/ "
                            ],
                            forSale: [
                              " http://www.zillow.com/east-queen-anne-seattle-wa/ "
                            ]
                          }
                        ]
                      },
                      {
                        $: { id: "16037", type: "city", name: "Seattle" },
                        zindexValue: ["381,764"],
                        zindexOneYearChange: ["-0.074"],
                        links: [
                          {
                            overview: [
                              " http://www.zillow.com/local-info/WA-Seattle/r_16037/ "
                            ],
                            forSaleByOwner: [
                              "http://www.zillow.com/homes/fsbo/Seattle-WA/"
                            ],
                            forSale: ["http://www.zillow.com/seattle-wa/"]
                          }
                        ]
                      },
                      {
                        $: { id: "59", type: "state", name: "Washington" },
                        zindexValue: ["263,278"],
                        zindexOneYearChange: ["-0.066"],
                        links: [
                          {
                            overview: [
                              " http://www.zillow.com/local-info/WA-home-value/r_59/ "
                            ],
                            forSaleByOwner: [
                              "http://www.zillow.com/homes/fsbo/WA/"
                            ],
                            forSale: ["http://www.zillow.com/wa/"]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
