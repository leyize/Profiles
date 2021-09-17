if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = '海有舟可渡 / 山有路可行';
var subtitle = '\n';
var ip = obj['query'];
var description = obj['country'] + '\n' + obj['city'] + '\n' + obj['isp'] + '\n' + obj['ipType'];

$done({title, subtitle, ip, description});
