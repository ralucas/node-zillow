export const mockXml = `
  <SearchResults:searchresults xsi:schemaLocation="http://www.zillow.com/static/xsd/SearchResults.xsd /vstatic/ae1bf8a790b67ef2e902d2bc04046f02/static/xsd/SearchResults.xsd"> 
  <request> 
  <address>2114 Bigelow Ave</address>
   <citystatezip>Seattle, WA</citystatezip>
    </request> 
    <message>
     <text>Request successfully processed<</text> 
     <code>0</code>
      </message> 
      <response> 
      <results> 
      <result>
       <zpid>48749425</zpid> 
       <links> 
       <homedetails> http://www.zillow.com/homedetails/2114-Bigelow-Ave-N-Seattle-WA-98109/48749425_zpid/ </homedetails>
        <graphsanddata> http://www.zillow.com/homedetails/charts/48749425_zpid,1year_chartDuration/?cbt=7522682882544325802%7E9%7EY2EzX18jtvYTCel5PgJtPY1pmDDLxGDZXzsfRy49lJvCnZ4bh7Fi9w** </graphsanddata>
         <mapthishome>http://www.zillow.com/homes/map/48749425_zpid/</mapthishome>
          <comparables>http://www.zillow.com/homes/comps/48749425_zpid/</comparables>
           </links> 
           <address> 
           <street>2114 Bigelow Ave N</street> 
           <zipcode>98109</zipcode> 
           <city>Seattle</city> 
           <state>WA</state> 
           <latitude>47.63793</latitude> 
           <longitude>-122.347936</longitude> 
           </address> 
           <zestimate> 
           <amount currency="USD">1219500</amount> 
           <last-updated>11/03/2009</last-updated> 
           <oneWeekChange deprecated="true"/>
            <valueChange duration="30" currency="USD">-41500</valueChange>
             <valuationRange> <low currency="USD">1024380</low> <high currency="USD">1378035</high> </valuationRange> 
             <percentile>0</percentile> </zestimate> <localRealEstate> <region id="271856" type="neighborhood" name="East Queen Anne"> <zindexValue>525,397</zindexValue> <zindexOneYearChange>-0.144</zindexOneYearChange> <links> <overview> http://www.zillow.com/local-info/WA-Seattle/East-Queen-Anne/r_271856/ </overview> <forSaleByOwner> http://www.zillow.com/homes/fsbo/East-Queen-Anne-Seattle-WA/ </forSaleByOwner> <forSale> http://www.zillow.com/east-queen-anne-seattle-wa/ </forSale> </links> </region> <region id="16037" type="city" name="Seattle"> <zindexValue>381,764</zindexValue> <zindexOneYearChange>-0.074</zindexOneYearChange> <links> <overview> http://www.zillow.com/local-info/WA-Seattle/r_16037/ </overview> <forSaleByOwner>http://www.zillow.com/homes/fsbo/Seattle-WA/</forSaleByOwner> <forSale>http://www.zillow.com/seattle-wa/</forSale> </links> </region> <region id="59" type="state" name="Washington"> <zindexValue>263,278</zindexValue> <zindexOneYearChange>-0.066</zindexOneYearChange> <links> <overview> http://www.zillow.com/local-info/WA-home-value/r_59/ </overview> <forSaleByOwner>http://www.zillow.com/homes/fsbo/WA/</forSaleByOwner> <forSale>http://www.zillow.com/wa/</forSale> </links> </region> </localRealEstate> </result> </results> </response> </SearchResults:searchresults>`;

export const mockGetDemographicData = `
<Demographics:demographics xmlns:Demographics="http://www.zillow.com/static/xsd/Demographics.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.zillow.com/static/xsd/Demographics.xsd https://www.zillowstatic.com/vstatic/18f7df5/static/xsd/Demographics.xsd">
<request>
<zip>80301</zip>
</request>
<message>
<text>Request successfully processed</text>
<code>0</code>
</message>
<response>
<region>
<id>93353</id>
<state>Colorado</state>
<city>Boulder</city>
<zip>80301</zip>
<latitude>40.054345</latitude>
<longitude>-105.19577</longitude>
<zmmrateurl>http://www.zillow.com/mortgage-rates/co/boulder/</zmmrateurl>
</region>
<links>
<main/>
<affordability>
http://www.zillow.com/local-info/CO-80301-home-value/r_93353/
</affordability>
<homesandrealestate/>
<people/>
<forSale>http://www.zillow.com/boulder-co-80301/</forSale>
<forSaleByOwner>http://www.zillow.com/boulder-co-80301/fsbo/</forSaleByOwner>
<foreclosures>
http://www.zillow.com/boulder-co-80301/fore_lt/pmf_pt/
</foreclosures>
<recentlySold>http://www.zillow.com/boulder-co-80301/sold/</recentlySold>
</links>
<charts>
<chart>
<name>Median Condo Value</name>
<url>
https://www.zillow.com:443/app?chartType=affordability_avgCondoValue&graphType=barChart&regionId=93353&regionType=7&service=chart
</url>
</chart>
<chart>
<name>Median Home Value</name>
<url>
https://www.zillow.com:443/app?chartType=affordability_avgHomeValue&graphType=barChart&regionId=93353&regionType=7&service=chart
</url>
</chart>
<chart>
<name>Dollars Per Square Feet</name>
<url>
https://www.zillow.com:443/app?chartType=affordability_pricePerSqft&graphType=barChart&regionId=93353&regionType=7&service=chart
</url>
</chart>
<chart>
<name deprecated="true">Zillow Home Value Index Distribution</name>
<url>
https://www.zillow.com:443/app?chartType=affordability_ZindexByDistribution&graphType=barChart&regionId=93353&regionType=7&service=chart
</url>
</chart>
<chart>
<name>Home Type</name>
<url>
https://www.zillow.com:443/app?chartType=home_homeType&graphType=barChart&regionId=93353&regionType=7&service=chart
</url>
</chart>
<chart>
<name deprecated="true">Owners vs. Renters</name>
<url>
https://www.zillow.com:443/app?chartType=home_ownVsRent&graphType=barChart&regionId=93353&regionType=7&service=chart
</url>
</chart>
<chart>
<name>Home Size in Square Feet</name>
<url>
https://www.zillow.com:443/app?chartType=home_homeSize&graphType=barChart&regionId=93353&regionType=7&service=chart
</url>
</chart>
<chart>
<name>Year Built</name>
<url>
https://www.zillow.com:443/app?chartType=home_yearBuilt&graphType=barChart&regionId=93353&regionType=7&service=chart
</url>
</chart>
</charts>
<market deprecated="true"/>
<pages>
<page>
<name>Affordability</name>
<tables>
<table>
<name>Affordability Data</name>
<data>
<attribute>
<name>Zillow Home Value Index</name>
<values>
<zip>
<value type="USD">563100</value>
</zip>
<nation>
<value type="USD">216700</value>
</nation>
</values>
</attribute>
<attribute>
<name>Median Single Family Home Value</name>
<values>
<zip>
<value type="USD">671600</value>
</zip>
<nation>
<value type="USD">215800</value>
</nation>
</values>
</attribute>
<attribute>
<name>Median Condo Value</name>
<values>
<zip>
<value type="USD">311600</value>
</zip>
<nation>
<value type="USD">227800</value>
</nation>
</values>
</attribute>
<attribute>
<name>Median 2-Bedroom Home Value</name>
<values>
<zip>
<value type="USD">333700</value>
</zip>
<nation>
<value type="USD">166300</value>
</nation>
</values>
</attribute>
<attribute>
<name>Median 3-Bedroom Home Value</name>
<values>
<zip>
<value type="USD">619800</value>
</zip>
<nation>
<value type="USD">209300</value>
</nation>
</values>
</attribute>
<attribute>
<name>Median 4-Bedroom Home Value</name>
<values>
<zip>
<value type="USD">742400</value>
</zip>
<nation>
<value type="USD">337000</value>
</nation>
</values>
</attribute>
<attribute>
<name>Percent Homes Decreasing</name>
<values>
<zip>
<value type="percent">0.281</value>
</zip>
<nation>
<value type="percent">0.335</value>
</nation>
</values>
</attribute>
<attribute>
<name>Percent Listing Price Reduction</name>
<values>
<zip>
<value type="percent">0.236</value>
</zip>
<nation>
<value type="percent">0.178</value>
</nation>
</values>
</attribute>
<attribute>
<name>Median List Price Per Sq Ft</name>
<values>
<zip>
<value type="USD">371</value>
</zip>
<nation>
<value type="USD">134</value>
</nation>
</values>
</attribute>
<attribute>
<name>Median List Price</name>
<values>
<zip>
<value type="USD">637500</value>
</zip>
<nation>
<value type="USD">275000</value>
</nation>
</values>
</attribute>
<attribute>
<name>Median Sale Price</name>
<values>
<zip>
<value>117</value>
</zip>
<nation>
<value type="USD">230800</value>
</nation>
</values>
</attribute>
<attribute>
<name>Homes For Sale</name>
<values>
<zip>
<value>117</value>
</zip>
<nation>
<value>2642658</value>
</nation>
</values>
</attribute>
<attribute>
<name>Homes Recently Sold</name>
<values>
<zip>
<value>117</value>
</zip>
<nation>
<value>2642658</value>
</nation>
</values>
</attribute>
<attribute>
<name>Property Tax</name>
<values>
<zip>
<value type="USD">2391</value>
</zip>
<nation>
<value type="USD">2147</value>
</nation>
</values>
</attribute>
<attribute>
<name>Turnover (Sold Within Last Yr.)</name>
<values>
<zip>
<value type="percent">0.025</value>
</zip>
<nation>
<value type="percent">0.029</value>
</nation>
</values>
</attribute>
<attribute>
<name>Median Value Per Sq Ft</name>
<values>
<zip>
<value type="USD">405</value>
</zip>
<nation>
<value type="USD">150</value>
</nation>
</values>
</attribute>
<attribute>
<name>1-Yr. Change</name>
<values>
<zip>
<value type="percent">0.045</value>
</zip>
<nation>
<value type="percent">0.065</value>
</nation>
</values>
</attribute>
<attribute>
<name>Homes For Sale By Owner</name>
<values>
<zip>
<value>2</value>
</zip>
<nation>
<value>106775</value>
</nation>
</values>
</attribute>
<attribute>
<name>New Construction</name>
<values>
<zip>
<value>13</value>
</zip>
<nation>
<value>214509</value>
</nation>
</values>
</attribute>
<attribute>
<name>Foreclosures</name>
<values>
<zip>
<value>1</value>
</zip>
<nation>
<value>13649</value>
</nation>
</values>
</attribute>
</data>
</table>
</tables>
</page>
<page>
<name>Homes & Real Estate</name>
<tables>
<table>
<name>Homes & Real Estate Data</name>
<data>
<attribute>
<name>Owners</name>
<values>
<nation>
<value type="percent">0.66268764</value>
</nation>
</values>
</attribute>
<attribute>
<name>Renters</name>
<values>
<nation>
<value type="percent">0.33731236</value>
</nation>
</values>
</attribute>
<attribute>
<name>Median Home Size (Sq. Ft.)</name>
<values/>
</attribute>
<attribute>
<name>Avg. Year Built</name>
<values/>
</attribute>
<attribute>
<name>Single-Family Homes</name>
<values/>
</attribute>
<attribute>
<name>Condos</name>
<values/>
</attribute>
</data>
</table>
<table>
<name>BuiltYear</name>
<data>
<attribute>
<name><1900</name>
<value type="percent">0.0018593459477</value>
</attribute>
<attribute>
<name>>2000</name>
<value type="percent">0.0549053921032</value>
</attribute>
<attribute>
<name>1900-1919</name>
<value type="percent">0.0013124794925</value>
</attribute>
<attribute>
<name>1920-1939</name>
<value type="percent">0.0032811987312</value>
</attribute>
<attribute>
<name>1940-1959</name>
<value type="percent">0.0064530241714</value>
</attribute>
<attribute>
<name>1960-1979</name>
<value type="percent">0.4219621568412</value>
</attribute>
<attribute>
<name>1980-1999</name>
<value type="percent">0.5102264027124</value>
</attribute>
</data>
</table>
<table>
<name>Census Summary-HomeSize</name>
<data>
<attribute>
<name><1000sqft</name>
<value type="percent">0.3049707924611</value>
</attribute>
<attribute>
<name>>3600sqft</name>
<value type="percent">0.0822219772952</value>
</attribute>
<attribute>
<name>1000-1400sqft</name>
<value type="percent">0.1512178992615</value>
</attribute>
<attribute>
<name>1400-1800sqft</name>
<value type="percent">0.1119806017855</value>
</attribute>
<attribute>
<name>1800-2400sqft</name>
<value type="percent">0.1604761379918</value>
</attribute>
<attribute>
<name>2400-3600sqft</name>
<value type="percent">0.1879202027995</value>
</attribute>
</data>
</table>
<table>
<name>Census Summary-HomeType</name>
<data>
<attribute>
<name>Condo</name>
<value type="percent">0.3178936055883</value>
</attribute>
<attribute>
<name>Other</name>
<value type="percent">0.1068242880171</value>
</attribute>
<attribute>
<name>SingleFamily</name>
<value type="percent">0.5752821063944</value>
</attribute>
</data>
</table>
</tables>
</page>
<page>
<name>People</name>
<tables>
<table>
<name>People Data</name>
<data>
<attribute>
<name>Median Household Income</name>
<values>
<nation>
<value currency="USD">44512.0130806292</value>
</nation>
</values>
</attribute>
<attribute>
<name>Single Males</name>
<values>
<nation>
<value type="percent">0.146462187349365</value>
</nation>
</values>
</attribute>
<attribute>
<name>Single Females</name>
<values>
<nation>
<value type="percent">0.124578258618535</value>
</nation>
</values>
</attribute>
<attribute>
<name>Median Age</name>
<values>
<nation>
<value>36</value>
</nation>
</values>
</attribute>
<attribute>
<name>Homes With Kids</name>
<values>
<nation>
<value type="percent">0.313623902816284</value>
</nation>
</values>
</attribute>
<attribute>
<name>Average Household Size</name>
<values>
<nation>
<value>2.58883240001203</value>
</nation>
</values>
</attribute>
<attribute>
<name>Average Commute Time (Minutes)</name>
<values>
<nation>
<value>26.375545725891282</value>
</nation>
</values>
</attribute>
</data>
</table>
</tables>
</page>
</pages>
</response>
</Demographics:demographics>
`;

export const mockGetDeepComps = `
<Comps:comps xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:Comps="http://www.zillow.com/static/xsd/Comps.xsd" xsi:schemaLocation="http://www.zillow.com/static/xsd/Comps.xsd https://www.zillowstatic.com/vstatic/18f7df5/static/xsd/Comps.xsd">
<request>
<zpid>13177031</zpid>
<count>10</count>
</request>
<message>
<text>Request successfully processed</text>
<code>0</code>
</message>
<response>
<properties>
<principal>
<zpid>13177031</zpid>
<links>
<homedetails>
https://www.zillow.com/homedetails/1619-Pine-St-Boulder-CO-80302/13177031_zpid/
</homedetails>
<graphsanddata>
http://www.zillow.com/homedetails/1619-Pine-St-Boulder-CO-80302/13177031_zpid/#charts-and-data
</graphsanddata>
<mapthishome>http://www.zillow.com/homes/13177031_zpid/</mapthishome>
<comparables>http://www.zillow.com/homes/comps/13177031_zpid/</comparables>
</links>
<address>
<street>1619 Pine St</street>
<zipcode>80302</zipcode>
<city>BOULDER</city>
<state>CO</state>
<latitude>40.02138</latitude>
<longitude>-105.275007</longitude>
</address>
<taxAssessmentYear>2017</taxAssessmentYear>
<taxAssessment>1959900.0</taxAssessment>
<yearBuilt>1900</yearBuilt>
<lotSizeSqFt>7667</lotSizeSqFt>
<finishedSqFt>3818</finishedSqFt>
<bathrooms>4.0</bathrooms>
<bedrooms>7</bedrooms>
<totalRooms>13</totalRooms>
<lastSoldDate>12/30/1974</lastSoldDate>
<lastSoldPrice currency="USD">80000</lastSoldPrice>
<zestimate>
<amount currency="USD">2318853</amount>
<last-updated>10/16/2018</last-updated>
<oneWeekChange deprecated="true"/>
<valueChange duration="30" currency="USD">9675</valueChange>
<valuationRange>
<low currency="USD">2202910</low>
<high currency="USD">2457984</high>
</valuationRange>
<percentile>98</percentile>
</zestimate>
<localRealEstate>
<region name="Whittier" id="416094" type="neighborhood">
<zindexValue>646,900</zindexValue>
<links>
<overview>
http://www.zillow.com/local-info/CO-Boulder/Whittier/r_416094/
</overview>
<forSaleByOwner>http://www.zillow.com/whittier-boulder-co/fsbo/</forSaleByOwner>
<forSale>http://www.zillow.com/whittier-boulder-co/</forSale>
</links>
</region>
</localRealEstate>
</principal>
<comparables>
<comp score="9.0">
<zpid>13183473</zpid>
<links>
<homedetails>
https://www.zillow.com/homedetails/2215-Linden-Ave-Boulder-CO-80304/13183473_zpid/
</homedetails>
<graphsanddata>
http://www.zillow.com/homedetails/2215-Linden-Ave-Boulder-CO-80304/13183473_zpid/#charts-and-data
</graphsanddata>
<mapthishome>http://www.zillow.com/homes/13183473_zpid/</mapthishome>
<comparables>http://www.zillow.com/homes/comps/13183473_zpid/</comparables>
</links>
<address>
<street>2215 Linden Ave</street>
<zipcode>80304</zipcode>
<city>BOULDER</city>
<state>CO</state>
<latitude>40.041219</latitude>
<longitude>-105.268114</longitude>
</address>
<taxAssessmentYear>2017</taxAssessmentYear>
<taxAssessment>1195100.0</taxAssessment>
<finishedSqFt>2694</finishedSqFt>
<bathrooms>3.0</bathrooms>
<bedrooms>3</bedrooms>
<lastSoldDate>03/14/2018</lastSoldDate>
<lastSoldPrice currency="USD">2500000</lastSoldPrice>
<zestimate>
<amount currency="USD">2587124</amount>
<last-updated>10/16/2018</last-updated>
<oneWeekChange deprecated="true"/>
<valueChange duration="30" currency="USD">7700</valueChange>
<valuationRange>
<low currency="USD">2380154</low>
<high currency="USD">2794094</high>
</valuationRange>
<percentile>99</percentile>
</zestimate>
<localRealEstate>
<region name="Carolyn Heights" id="416103" type="neighborhood">
<links>
<overview>
http://www.zillow.com/local-info/CO-Boulder/Carolyn-Heights/r_416103/
</overview>
<forSaleByOwner>
http://www.zillow.com/carolyn-heights-boulder-co/fsbo/
</forSaleByOwner>
<forSale>http://www.zillow.com/carolyn-heights-boulder-co/</forSale>
</links>
</region>
</localRealEstate>
</comp>
<comp score="9.0">
<zpid>13176323</zpid>
<links>
<homedetails>
https://www.zillow.com/homedetails/820-Hawthorn-Ave-Boulder-CO-80304/13176323_zpid/
</homedetails>
<graphsanddata>
http://www.zillow.com/homedetails/820-Hawthorn-Ave-Boulder-CO-80304/13176323_zpid/#charts-and-data
</graphsanddata>
<mapthishome>http://www.zillow.com/homes/13176323_zpid/</mapthishome>
<comparables>http://www.zillow.com/homes/comps/13176323_zpid/</comparables>
</links>
<address>
<street>820 Hawthorn Ave</street>
<zipcode>80304</zipcode>
<city>BOULDER</city>
<state>CO</state>
<latitude>40.034722</latitude>
<longitude>-105.285817</longitude>
</address>
<taxAssessmentYear>2017</taxAssessmentYear>
<taxAssessment>1604900.0</taxAssessment>
<yearBuilt>2008</yearBuilt>
<lotSizeSqFt>11761</lotSizeSqFt>
<finishedSqFt>4800</finishedSqFt>
<bathrooms>4.0</bathrooms>
<bedrooms>5</bedrooms>
<totalRooms>9</totalRooms>
<lastSoldDate>09/17/2018</lastSoldDate>
<lastSoldPrice currency="USD">1800000</lastSoldPrice>
<zestimate>
<amount currency="USD">2211244</amount>
<last-updated>10/16/2018</last-updated>
<oneWeekChange deprecated="true"/>
<valueChange duration="30" currency="USD">174898</valueChange>
<valuationRange>
<low currency="USD">1857445</low>
<high currency="USD">2476593</high>
</valuationRange>
<percentile>98</percentile>
</zestimate>
<localRealEstate>
<region name="Newlands" id="416099" type="neighborhood">
<zindexValue>1,153,300</zindexValue>
<links>
<overview>
http://www.zillow.com/local-info/CO-Boulder/Newlands/r_416099/
</overview>
<forSaleByOwner>http://www.zillow.com/newlands-boulder-co/fsbo/</forSaleByOwner>
<forSale>http://www.zillow.com/newlands-boulder-co/</forSale>
</links>
</region>
</localRealEstate>
</comp>
<comp score="15.0">
<zpid>13176455</zpid>
<links>
<homedetails>
https://www.zillow.com/homedetails/916-12th-St-Boulder-CO-80302/13176455_zpid/
</homedetails>
<graphsanddata>
http://www.zillow.com/homedetails/916-12th-St-Boulder-CO-80302/13176455_zpid/#charts-and-data
</graphsanddata>
<mapthishome>http://www.zillow.com/homes/13176455_zpid/</mapthishome>
<comparables>http://www.zillow.com/homes/comps/13176455_zpid/</comparables>
</links>
<address>
<street>916 12th St</street>
<zipcode>80302</zipcode>
<city>BOULDER</city>
<state>CO</state>
<latitude>40.004098</latitude>
<longitude>-105.277069</longitude>
</address>
<taxAssessmentYear>2017</taxAssessmentYear>
<taxAssessment>1026600.0</taxAssessment>
<yearBuilt>1923</yearBuilt>
<lotSizeSqFt>6011</lotSizeSqFt>
<finishedSqFt>2860</finishedSqFt>
<bathrooms>2.5</bathrooms>
<bedrooms>4</bedrooms>
<totalRooms>6</totalRooms>
<lastSoldDate>03/12/2018</lastSoldDate>
<lastSoldPrice currency="USD">1250000</lastSoldPrice>
<zestimate>
<amount currency="USD">1515517</amount>
<last-updated>10/16/2018</last-updated>
<oneWeekChange deprecated="true"/>
<valueChange duration="30" currency="USD">37987</valueChange>
<valuationRange>
<low currency="USD">1439741</low>
<high currency="USD">1591293</high>
</valuationRange>
<percentile>93</percentile>
</zestimate>
<localRealEstate>
<region name="University Hill" id="416088" type="neighborhood">
<zindexValue>864,700</zindexValue>
<links>
<overview>
http://www.zillow.com/local-info/CO-Boulder/University-Hill/r_416088/
</overview>
<forSaleByOwner>
http://www.zillow.com/university-hill-boulder-co/fsbo/
</forSaleByOwner>
<forSale>http://www.zillow.com/university-hill-boulder-co/</forSale>
</links>
</region>
</localRealEstate>
</comp>
<comp score="15.0">
<zpid>13176475</zpid>
<links>
<homedetails>
https://www.zillow.com/homedetails/611-Marine-St-Boulder-CO-80302/13176475_zpid/
</homedetails>
<graphsanddata>
http://www.zillow.com/homedetails/611-Marine-St-Boulder-CO-80302/13176475_zpid/#charts-and-data
</graphsanddata>
<mapthishome>http://www.zillow.com/homes/13176475_zpid/</mapthishome>
<comparables>http://www.zillow.com/homes/comps/13176475_zpid/</comparables>
</links>
<address>
<street>611 Marine St</street>
<zipcode>80302</zipcode>
<city>BOULDER</city>
<state>CO</state>
<latitude>40.011924</latitude>
<longitude>-105.286836</longitude>
</address>
<taxAssessmentYear>2017</taxAssessmentYear>
<taxAssessment>1062100.0</taxAssessment>
<yearBuilt>1889</yearBuilt>
<lotSizeSqFt>5662</lotSizeSqFt>
<finishedSqFt>2080</finishedSqFt>
<bathrooms>2.0</bathrooms>
<bedrooms>4</bedrooms>
<totalRooms>10</totalRooms>
<lastSoldDate>06/13/2018</lastSoldDate>
<lastSoldPrice currency="USD">1315000</lastSoldPrice>
<zestimate>
<amount currency="USD">1339681</amount>
<last-updated>10/16/2018</last-updated>
<oneWeekChange deprecated="true"/>
<valueChange duration="30" currency="USD">6773</valueChange>
<valuationRange>
<low currency="USD">1272697</low>
<high currency="USD">1460252</high>
</valuationRange>
<percentile>91</percentile>
</zestimate>
<localRealEstate>
<region name="Flatirons" id="416090" type="neighborhood">
<links>
<overview>
http://www.zillow.com/local-info/CO-Boulder/Flatirons/r_416090/
</overview>
<forSaleByOwner>http://www.zillow.com/flatirons-boulder-co/fsbo/</forSaleByOwner>
<forSale>http://www.zillow.com/flatirons-boulder-co/</forSale>
</links>
</region>
</localRealEstate>
</comp>
<comp score="8.0">
<zpid>13176579</zpid>
<links>
<homedetails>
https://www.zillow.com/homedetails/623-Concord-Ave-Boulder-CO-80304/13176579_zpid/
</homedetails>
<graphsanddata>
http://www.zillow.com/homedetails/623-Concord-Ave-Boulder-CO-80304/13176579_zpid/#charts-and-data
</graphsanddata>
<mapthishome>http://www.zillow.com/homes/13176579_zpid/</mapthishome>
<comparables>http://www.zillow.com/homes/comps/13176579_zpid/</comparables>
</links>
<address>
<street>623 Concord Ave</street>
<zipcode>80304</zipcode>
<city>BOULDER</city>
<state>CO</state>
<latitude>40.02306</latitude>
<longitude>-105.287993</longitude>
</address>
<taxAssessmentYear>2017</taxAssessmentYear>
<taxAssessment>1268700.0</taxAssessment>
<yearBuilt>1920</yearBuilt>
<lotSizeSqFt>8407</lotSizeSqFt>
<finishedSqFt>2199</finishedSqFt>
<bathrooms>2.0</bathrooms>
<bedrooms>3</bedrooms>
<totalRooms>9</totalRooms>
<lastSoldDate>12/05/2017</lastSoldDate>
<lastSoldPrice currency="USD">2133400</lastSoldPrice>
<zestimate>
<amount currency="USD">2256165</amount>
<last-updated>10/16/2018</last-updated>
<oneWeekChange deprecated="true"/>
<valueChange duration="30" currency="USD">8989</valueChange>
<valuationRange>
<low currency="USD">2075672</low>
<high currency="USD">2368973</high>
</valuationRange>
<percentile>98</percentile>
</zestimate>
<localRealEstate>
<region name="Mapleton Hill" id="416092" type="neighborhood">
<zindexValue>940,300</zindexValue>
<links>
<overview>
http://www.zillow.com/local-info/CO-Boulder/Mapleton-Hill/r_416092/
</overview>
<forSaleByOwner>
http://www.zillow.com/mapleton-hill-boulder-co/fsbo/
</forSaleByOwner>
<forSale>http://www.zillow.com/mapleton-hill-boulder-co/</forSale>
</links>
</region>
</localRealEstate>
</comp>
<comp score="7.0">
<zpid>13176582</zpid>
<links>
<homedetails>
https://www.zillow.com/homedetails/870-University-Ave-Boulder-CO-80302/13176582_zpid/
</homedetails>
<graphsanddata>
http://www.zillow.com/homedetails/870-University-Ave-Boulder-CO-80302/13176582_zpid/#charts-and-data
</graphsanddata>
<mapthishome>http://www.zillow.com/homes/13176582_zpid/</mapthishome>
<comparables>http://www.zillow.com/homes/comps/13176582_zpid/</comparables>
</links>
<address>
<street>870 University Ave</street>
<zipcode>80302</zipcode>
<city>BOULDER</city>
<state>CO</state>
<latitude>40.010144</latitude>
<longitude>-105.282755</longitude>
</address>
<taxAssessmentYear>2017</taxAssessmentYear>
<taxAssessment>938200.0</taxAssessment>
<yearBuilt>1922</yearBuilt>
<lotSizeSqFt>6969</lotSizeSqFt>
<finishedSqFt>2840</finishedSqFt>
<bathrooms>3.0</bathrooms>
<bedrooms>4</bedrooms>
<totalRooms>8</totalRooms>
<lastSoldDate>06/27/2018</lastSoldDate>
<lastSoldPrice currency="USD">1985000</lastSoldPrice>
<zestimate>
<amount currency="USD">2012260</amount>
<last-updated>10/16/2018</last-updated>
<oneWeekChange deprecated="true"/>
<valueChange duration="30" currency="USD">6262</valueChange>
<valuationRange>
<low currency="USD">1811034</low>
<high currency="USD">2132996</high>
</valuationRange>
<percentile>97</percentile>
</zestimate>
<localRealEstate>
<region name="Flatirons" id="416090" type="neighborhood">
<links>
<overview>
http://www.zillow.com/local-info/CO-Boulder/Flatirons/r_416090/
</overview>
<forSaleByOwner>http://www.zillow.com/flatirons-boulder-co/fsbo/</forSaleByOwner>
<forSale>http://www.zillow.com/flatirons-boulder-co/</forSale>
</links>
</region>
</localRealEstate>
</comp>
<comp score="13.0">
<zpid>13176654</zpid>
<links>
<homedetails>
https://www.zillow.com/homedetails/1058-Rosehill-Dr-Boulder-CO-80302/13176654_zpid/
</homedetails>
<graphsanddata>
http://www.zillow.com/homedetails/1058-Rosehill-Dr-Boulder-CO-80302/13176654_zpid/#charts-and-data
</graphsanddata>
<mapthishome>http://www.zillow.com/homes/13176654_zpid/</mapthishome>
<comparables>http://www.zillow.com/homes/comps/13176654_zpid/</comparables>
</links>
<address>
<street>1058 Rosehill Dr</street>
<zipcode>80302</zipcode>
<city>BOULDER</city>
<state>CO</state>
<latitude>40.006518</latitude>
<longitude>-105.285176</longitude>
</address>
<taxAssessmentYear>2017</taxAssessmentYear>
<taxAssessment>1376800.0</taxAssessment>
<yearBuilt>1950</yearBuilt>
<lotSizeSqFt>12645</lotSizeSqFt>
<finishedSqFt>2940</finishedSqFt>
<bathrooms>3.0</bathrooms>
<bedrooms>5</bedrooms>
<totalRooms>12</totalRooms>
<lastSoldDate>07/31/2018</lastSoldDate>
<lastSoldPrice currency="USD">1450000</lastSoldPrice>
<zestimate>
<amount currency="USD">1634377</amount>
<last-updated>10/16/2018</last-updated>
<oneWeekChange deprecated="true"/>
<valueChange duration="30" currency="USD">9929</valueChange>
<valuationRange>
<low currency="USD">1503627</low>
<high currency="USD">1830502</high>
</valuationRange>
<percentile>94</percentile>
</zestimate>
<localRealEstate>
<region name="Grant" id="416089" type="neighborhood">
<links>
<overview>
http://www.zillow.com/local-info/CO-Boulder/Grant/r_416089/
</overview>
<forSaleByOwner>http://www.zillow.com/grant-boulder-co/fsbo/</forSaleByOwner>
<forSale>http://www.zillow.com/grant-boulder-co/</forSale>
</links>
</region>
</localRealEstate>
</comp>
<comp score="10.0">
<zpid>13176707</zpid>
<links>
<homedetails>
https://www.zillow.com/homedetails/920-Grant-Pl-Boulder-CO-80302/13176707_zpid/
</homedetails>
<graphsanddata>
http://www.zillow.com/homedetails/920-Grant-Pl-Boulder-CO-80302/13176707_zpid/#charts-and-data
</graphsanddata>
<mapthishome>http://www.zillow.com/homes/13176707_zpid/</mapthishome>
<comparables>http://www.zillow.com/homes/comps/13176707_zpid/</comparables>
</links>
<address>
<street>920 Grant Pl</street>
<zipcode>80302</zipcode>
<city>BOULDER</city>
<state>CO</state>
<latitude>40.004175</latitude>
<longitude>-105.282786</longitude>
</address>
<taxAssessmentYear>2017</taxAssessmentYear>
<taxAssessment>1562000.0</taxAssessment>
<yearBuilt>1927</yearBuilt>
<lotSizeSqFt>7013</lotSizeSqFt>
<finishedSqFt>3562</finishedSqFt>
<bathrooms>4.0</bathrooms>
<bedrooms>5</bedrooms>
<totalRooms>9</totalRooms>
<lastSoldDate>08/21/2018</lastSoldDate>
<lastSoldPrice currency="USD">1640000</lastSoldPrice>
<zestimate>
<amount currency="USD">1673267</amount>
<last-updated>10/16/2018</last-updated>
<oneWeekChange deprecated="true"/>
<valueChange duration="30" currency="USD">-15914</valueChange>
<valuationRange>
<low currency="USD">1589604</low>
<high currency="USD">1756930</high>
</valuationRange>
<percentile>94</percentile>
</zestimate>
<localRealEstate>
<region name="Grant" id="416089" type="neighborhood">
<links>
<overview>
http://www.zillow.com/local-info/CO-Boulder/Grant/r_416089/
</overview>
<forSaleByOwner>http://www.zillow.com/grant-boulder-co/fsbo/</forSaleByOwner>
<forSale>http://www.zillow.com/grant-boulder-co/</forSale>
</links>
</region>
</localRealEstate>
</comp>
<comp score="14.0">
<zpid>13176716</zpid>
<links>
<homedetails>
https://www.zillow.com/homedetails/280-Abbey-Pl-Boulder-CO-80302/13176716_zpid/
</homedetails>
<graphsanddata>
http://www.zillow.com/homedetails/280-Abbey-Pl-Boulder-CO-80302/13176716_zpid/#charts-and-data
</graphsanddata>
<mapthishome>http://www.zillow.com/homes/13176716_zpid/</mapthishome>
<comparables>http://www.zillow.com/homes/comps/13176716_zpid/</comparables>
</links>
<address>
<street>280 Abbey Pl</street>
<zipcode>80302</zipcode>
<city>BOULDER</city>
<state>CO</state>
<latitude>39.995997</latitude>
<longitude>-105.269985</longitude>
</address>
<taxAssessmentYear>2017</taxAssessmentYear>
<taxAssessment>1094500.0</taxAssessment>
<yearBuilt>1960</yearBuilt>
<lotSizeSqFt>10890</lotSizeSqFt>
<finishedSqFt>3584</finishedSqFt>
<bathrooms>4.0</bathrooms>
<bedrooms>5</bedrooms>
<totalRooms>6</totalRooms>
<lastSoldDate>07/10/2018</lastSoldDate>
<lastSoldPrice currency="USD">1370000</lastSoldPrice>
<zestimate>
<amount currency="USD">1300210</amount>
<last-updated>10/16/2018</last-updated>
<oneWeekChange deprecated="true"/>
<valueChange duration="30" currency="USD">7033</valueChange>
<valuationRange>
<low currency="USD">1170189</low>
<high currency="USD">1495241</high>
</valuationRange>
<percentile>90</percentile>
</zestimate>
<localRealEstate>
<region name="East Chautauqua" id="416076" type="neighborhood">
<zindexValue>1,324,500</zindexValue>
<links>
<overview>
http://www.zillow.com/local-info/CO-Boulder/East-Chautauqua/r_416076/
</overview>
<forSaleByOwner>
http://www.zillow.com/east-chautauqua-boulder-co/fsbo/
</forSaleByOwner>
<forSale>http://www.zillow.com/east-chautauqua-boulder-co/</forSale>
</links>
</region>
</localRealEstate>
</comp>
<comp score="16.0">
<zpid>13176762</zpid>
<links>
<homedetails>
https://www.zillow.com/homedetails/1460-Moss-Rock-Pl-Boulder-CO-80304/13176762_zpid/
</homedetails>
<graphsanddata>
http://www.zillow.com/homedetails/1460-Moss-Rock-Pl-Boulder-CO-80304/13176762_zpid/#charts-and-data
</graphsanddata>
<mapthishome>http://www.zillow.com/homes/13176762_zpid/</mapthishome>
<comparables>http://www.zillow.com/homes/comps/13176762_zpid/</comparables>
</links>
<address>
<street>1460 Moss Rock Pl</street>
<zipcode>80304</zipcode>
<city>BOULDER</city>
<state>CO</state>
<latitude>40.041768</latitude>
<longitude>-105.279028</longitude>
</address>
<taxAssessmentYear>2017</taxAssessmentYear>
<taxAssessment>983000.0</taxAssessment>
<yearBuilt>1968</yearBuilt>
<lotSizeSqFt>7209</lotSizeSqFt>
<finishedSqFt>2280</finishedSqFt>
<bathrooms>2.0</bathrooms>
<bedrooms>4</bedrooms>
<totalRooms>7</totalRooms>
<lastSoldDate>06/14/2018</lastSoldDate>
<lastSoldPrice currency="USD">1250000</lastSoldPrice>
<zestimate>
<amount currency="USD">1261904</amount>
<last-updated>10/16/2018</last-updated>
<oneWeekChange deprecated="true"/>
<valueChange duration="30" currency="USD">9700</valueChange>
<valuationRange>
<low currency="USD">1198809</low>
<high currency="USD">1324999</high>
</valuationRange>
<percentile>91</percentile>
</zestimate>
<localRealEstate>
<region name="Catalpa Park" id="416101" type="neighborhood">
<zindexValue>831,500</zindexValue>
<links>
<overview>
http://www.zillow.com/local-info/CO-Boulder/Catalpa-Park/r_416101/
</overview>
<forSaleByOwner>
http://www.zillow.com/catalpa-park-boulder-co/fsbo/
</forSaleByOwner>
<forSale>http://www.zillow.com/catalpa-park-boulder-co/</forSale>
</links>
</region>
</localRealEstate>
</comp>
</comparables>
</properties>
</response>
</Comps:comps>
`;

export const mockGetUpdatedPropertyDetailsUpdates = `
<UpdatedPropertyDetails:updatedPropertyDetails xmlns:UpdatedPropertyDetails="http://www.zillow.com/static/xsd/UpdatedPropertyDetails.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.zillow.com/static/xsd/UpdatedPropertyDetails.xsd https://www.zillowstatic.com/vstatic/18f7df5/static/xsd/UpdatedPropertyDetails.xsd">
<request>
<zpid>13176378</zpid>
</request>
<message>
<text>Request successfully processed</text>
<code>0</code>
</message>
<response>
<zpid>13176378</zpid>
<pageViewCount>
<currentMonth>1</currentMonth>
<total>1</total>
</pageViewCount>
<address>
<street>2512 Mapleton Ave</street>
<zipcode>80304</zipcode>
<city>BOULDER</city>
<state>CO</state>
<latitude>40.0242</latitude>
<longitude>-105.263496</longitude>
</address>
<links>
<homeDetails>
https://www.zillow.com/homedetails/2512-Mapleton-Ave-Boulder-CO-80304/13176378_zpid/
</homeDetails>
<photoGallery>
https://www.zillow.com/homedetails/2512-Mapleton-Ave-Boulder-CO-80304/13176378_zpid/#image=lightbox%3Dtrue
</photoGallery>
<homeInfo>
https://www.zillow.com/homedetails/2512-Mapleton-Ave-Boulder-CO-80304/13176378_zpid/
</homeInfo>
</links>
<images>
<count>21</count>
<image>
<url>
https://photos.zillowstatic.com/p_d/ISyvln9ykc6083.jpg
</url>
<url>
https://photos.zillowstatic.com/p_d/IS23fkov41i34o1000000000.jpg
</url>
<url>
https://photos.zillowstatic.com/p_d/ISe40b8o0vu3go1000000000.jpg
</url>
<url>
https://photos.zillowstatic.com/p_d/ISyvln8v3pwwpv.jpg
</url>
<url>
https://photos.zillowstatic.com/p_d/ISyvln7jqz7lb7.jpg
</url>
</image>
</images>
<editedFacts>
<useCode>SingleFamily</useCode>
<bedrooms>6</bedrooms>
<bathrooms>3.0</bathrooms>
<finishedSqFt>2527</finishedSqFt>
<lotSizeSqFt>7100</lotSizeSqFt>
<yearBuilt>1910</yearBuilt>
<yearUpdated>2009</yearUpdated>
<numFloors>2</numFloors>
<numRooms>10</numRooms>
<basement>None</basement>
<roof>Composition</roof>
<exteriorMaterial>Stucco, Wood products</exteriorMaterial>
<view>City, Mountain</view>
<parkingType>Off-street</parkingType>
<heatingSources>Gas</heatingSources>
<heatingSystem>Forced air, Baseboard</heatingSystem>
<coolingSystem>Central</coolingSystem>
<appliances>Microwave, Range / Oven, Refrigerator, Dishwasher</appliances>
<floorCovering>Hardwood, Tile, Carpet</floorCovering>
<rooms>Breakfast nook, Family room, Dining room</rooms>
<architecture>Modern</architecture>
</editedFacts>
<homeDescription>
Remodeled Low Maintenance Investment with EVERYTHING new thanks to recent remodel. New Interior Kitchens, Baths with high-end finishes + New Eco-Exterior, Sewer main. Price is Firm. Rents Guarenteed through Aug. 2014 w/Possible buy out fop optional live in. Located near CU, downtown and 29th St. stores. QUALITY living attracts mature renters, never vacant. Duplex w/2- 3 BR/2BA units w/Jetted Tubs, optional security, stainless/granite kitchens, solid wood cabinets and flrs, bay windows, BEAUTFUL. Neighborhood Description Great neighborhood located in Central Boulder and downtown yet still close to CU.
</homeDescription>
<whatOwnerLoves>
Security, Wine Bar, Updated Kitchens and Baths, Modern Colors, Open Spaces and Jacuzzi Tubs!
</whatOwnerLoves>
<neighborhood>Whitter/ Mapleton</neighborhood>
<schoolDistrict>Bldr Valley Dist RE2</schoolDistrict>
<elementarySchool>Whittier, Other</elementarySchool>
<middleSchool>Casey</middleSchool>
<highSchool>Boulder</highSchool>
</response>
</UpdatedPropertyDetails:updatedPropertyDetails>
`;

export const mockGetUpdatedPropertyDetailsNoUpdates = `
<UpdatedPropertyDetails:updatedPropertyDetails xmlns:UpdatedPropertyDetails="http://www.zillow.com/static/xsd/UpdatedPropertyDetails.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.zillow.com/static/xsd/UpdatedPropertyDetails.xsd https://www.zillowstatic.com/vstatic/18f7df5/static/xsd/UpdatedPropertyDetails.xsd">
<request>
<zpid>13177031</zpid>
</request>
<message>
<text>
Error: no updated data is available for this property
</text>
<code>502</code>
</message>
</UpdatedPropertyDetails:updatedPropertyDetails>
`;

export const mockGetDeepSearchResults = `
<SearchResults:searchresults xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SearchResults="http://www.zillow.com/static/xsd/SearchResults.xsd" xsi:schemaLocation="http://www.zillow.com/static/xsd/SearchResults.xsd https://www.zillowstatic.com/vstatic/18f7df5/static/xsd/SearchResults.xsd">
<request>
<address>1619 Pine St.</address>
<citystatezip>Boulder, Colorado 80301</citystatezip>
</request>
<message>
<text>Request successfully processed</text>
<code>0</code>
</message>
<response>
<results>
<result>
<zpid>13177031</zpid>
<links>
<homedetails>
https://www.zillow.com/homedetails/1619-Pine-St-Boulder-CO-80302/13177031_zpid/
</homedetails>
<graphsanddata>
http://www.zillow.com/homedetails/1619-Pine-St-Boulder-CO-80302/13177031_zpid/#charts-and-data
</graphsanddata>
<mapthishome>http://www.zillow.com/homes/13177031_zpid/</mapthishome>
<comparables>http://www.zillow.com/homes/comps/13177031_zpid/</comparables>
</links>
<address>
<street>1619 Pine St</street>
<zipcode>80302</zipcode>
<city>BOULDER</city>
<state>CO</state>
<latitude>40.02138</latitude>
<longitude>-105.275007</longitude>
</address>
<FIPScounty>8013</FIPScounty>
<useCode>SingleFamily</useCode>
<taxAssessmentYear>2017</taxAssessmentYear>
<taxAssessment>1959900.0</taxAssessment>
<yearBuilt>1900</yearBuilt>
<lotSizeSqFt>7667</lotSizeSqFt>
<finishedSqFt>3818</finishedSqFt>
<bathrooms>4.0</bathrooms>
<bedrooms>7</bedrooms>
<totalRooms>13</totalRooms>
<lastSoldDate>12/30/1974</lastSoldDate>
<lastSoldPrice currency="USD">80000</lastSoldPrice>
<zestimate>
<amount currency="USD">2318853</amount>
<last-updated>10/16/2018</last-updated>
<oneWeekChange deprecated="true"/>
<valueChange duration="30" currency="USD">9675</valueChange>
<valuationRange>
<low currency="USD">2202910</low>
<high currency="USD">2457984</high>
</valuationRange>
<percentile>0</percentile>
</zestimate>
<localRealEstate>
<region name="Whittier" id="416094" type="neighborhood">
<zindexValue>646,900</zindexValue>
<links>
<overview>
http://www.zillow.com/local-info/CO-Boulder/Whittier/r_416094/
</overview>
<forSaleByOwner>http://www.zillow.com/whittier-boulder-co/fsbo/</forSaleByOwner>
<forSale>http://www.zillow.com/whittier-boulder-co/</forSale>
</links>
</region>
</localRealEstate>
</result>
</results>
</response>
</SearchResults:searchresults>`;

export const mockGetZestimate = `
<Zestimate:zestimate xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:Zestimate="http://www.zillow.com/static/xsd/Zestimate.xsd" xsi:schemaLocation="http://www.zillow.com/static/xsd/Zestimate.xsd https://www.zillowstatic.com/vstatic/18f7df5/static/xsd/Zestimate.xsd">
<request>
<zpid>1111111</zpid>
</request>
<message>
<text>Request successfully processed</text>
<code>0</code>
</message>
<response>
<zpid>1111111</zpid>
<links>
<homedetails>
https://www.zillow.com/homedetails/2515-S-Pennsylvania-St-Indianapolis-IN-46225/1111111_zpid/
</homedetails>
<graphsanddata>
http://www.zillow.com/homedetails/2515-S-Pennsylvania-St-Indianapolis-IN-46225/1111111_zpid/#charts-and-data
</graphsanddata>
<mapthishome>http://www.zillow.com/homes/1111111_zpid/</mapthishome>
<comparables>http://www.zillow.com/homes/comps/1111111_zpid/</comparables>
</links>
<address>
<street>2515 S Pennsylvania St</street>
<zipcode>46225</zipcode>
<city>INDIANAPOLIS</city>
<state>IN</state>
<latitude>39.731025</latitude>
<longitude>-86.156253</longitude>
</address>
<zestimate>
<amount currency="USD">62338</amount>
<last-updated>10/16/2018</last-updated>
<oneWeekChange deprecated="true"/>
<valueChange duration="30" currency="USD">584</valueChange>
<valuationRange>
<low currency="USD">56104</low>
<high currency="USD">66702</high>
</valuationRange>
<percentile>64</percentile>
</zestimate>
<localRealEstate>
<region name="Garfield Park" id="753771" type="neighborhood">
<zindexValue>67,000</zindexValue>
<links>
<overview>
http://www.zillow.com/local-info/IN-Indianapolis/Garfield-Park/r_753771/
</overview>
<forSaleByOwner>
http://www.zillow.com/garfield-park-indianapolis-in/fsbo/
</forSaleByOwner>
<forSale>
http://www.zillow.com/garfield-park-indianapolis-in/
</forSale>
</links>
</region>
</localRealEstate>
<regions>
<zipcode-id>78040</zipcode-id>
<city-id>32149</city-id>
<county-id>1165</county-id>
<state-id>22</state-id>
</regions>
</response>
</Zestimate:zestimate>

`;

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
