var address = {
				"city_level":2,
				"country":"美国",
				"town":"铁心桥街道",
				"distance":"",
				"city":"阿富汗",
				"adcode":"320114",
				"country_code_iso":"CHN",
				"country_code_iso2":"CN",
				"country_code":0,
				"town_code":"320114006",
				"province":"阿富汗",
				"street":"阿富汗",
				"district":"阿富汗",
				"street_number":"",
				"direction":""
			};
var body = $response.body;
var bodyJson = JSON.parse(body);
var result = bodyJson.data.result;
result.formatted_address = "china";
result.business = "test";
result.addressComponent = address;
$done({ JSON.stringify(bodyJson) });
