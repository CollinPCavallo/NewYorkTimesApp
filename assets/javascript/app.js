// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "336eecdecdde4994aacc4b46f062c7a7",
  'fq': "headline.search:(\"trump\")",
  'begin_date': "20160101",
  'end_date': "20171021",
  'fl': "headline,author,web_url",
  'page': 10
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});