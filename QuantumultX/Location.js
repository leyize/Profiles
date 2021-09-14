if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = '𝗤𝘂𝗮𝗻𝘁𝘂𝗺𝘂𝗹𝘁 𝗫';
var subtitle = '\n';
var ip = obj['query'];
var description = obj['country'] + '\n' + obj['city'] + '\n' + obj['isp'] + '\n' + obj['ipType'];

$done({title, subtitle, ip, description});
