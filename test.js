var address = {
				"city_level":2,
				"country":"美国",
				"town":"美国",
				"distance":"",
				"city":"美国",
				"adcode":"320114",
				"country_code_iso":"CHN",
				"country_code_iso2":"CN",
				"country_code":0,
				"town_code":"320114006",
				"province":"美国",
				"street":"美国",
				"district":"美国",
				"street_number":"",
				"direction":""
			};
var location = {
				"lng":119.77862181481463,
				"lat":32.977030871550597
			};
var body = $response.body;
var bodyJson = JSON.parse(body);
var result = bodyJson.data.result;
result.formatted_address = "china";
result.business = "test";
result.addressComponent = address;
result.location = location;
$done({ JSON.stringify(bodyJson) });
