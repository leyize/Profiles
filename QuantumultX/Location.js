if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = '\n';
var ip = obj['query'];
var description = obj['country'] + '\n' + obj['city'] + '\n' + obj['isp'] + '\n' + obj['ipType'];

$done({title, subtitle, ip, description});
