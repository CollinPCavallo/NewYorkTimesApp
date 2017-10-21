// Built by LucyBot. www.lucybot.com

/*url += '?' + $.param({
  'api-key': "336eecdecdde4994aacc4b46f062c7a7",
  'fq': "headline.search:(\"trump\")",
  'begin_date': "20160101",
  'end_date': "20171021",
  'fl': "headline,author,web_url",
  'page': 10
});*/

$('document').ready(function(){
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	var apiKey = "336eecdecdde4994aacc4b46f062c7a7";
	var userSearch = "Trump";
	var beginYear = "2016";
	var endYear = '2017';
	var pageLimit = 10;
	var searchBtn;
	var clearBtn;

	url += '?' + $.param({
		'api-key': apiKey,
		'fq': 'headline.search:(\"' + userSearch + '\")',
		'begin_date': beginYear + "0101",
		'end_date': endYear + "1021",
		'fl': "headline,author,web_url",
		'page': pageLimit,
	});

	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);
	  $("#articles").text(JSON.stringify(result));
	}).fail(function(err) {
	  throw err;
	});

});