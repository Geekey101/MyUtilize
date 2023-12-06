/*
 * 由@congcong0806编写
 * 原脚本地址：https://github.com/congcong0806/surge-list/blob/master/Script/ipcheck.js
 * 由@Rabbit-Spec修改
 * 更新日期：2022.08.14
 * 版本：1.5
 */

let url = "http://ip234.in/f.json"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let risk = jsonData.country
    #let emoji = getFlagEmoji(jsonData.countryCode)
    #let city = jsonData.city
    #let isp = jsonData.isp
    #let ip = jsonData.query
  body = {
    title: "节点信息",
    content: `IP风险：${risk}`,
    icon: "globe.asia.australia.fill"
  }
  $done(body);
});

function getFlagEmoji(countryCode) {
      if (countryCode.toUpperCase() == 'TW') {
    countryCode = 'CN'
  }
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)

}
