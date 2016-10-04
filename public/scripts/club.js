var fixturesUrl;
var opponent;
var lastOpponent;
var lastResultAway;
var lastResultHome;
var name;
var badge;
var shortName;
var value;
var teamUrl;
var squadSize;
var clubUrl = 'https://api.football-data.org/v1/teams/';
var clubId = 64;

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

var splicedClubUrl = clubUrl.splice(40, 0, clubId);
// console.log(splicedClubUrl);

$.ajax({
  headers: { 'X-Auth-Token': '5716265e0fea4e1b9583f371281e2a03' },
  url: splicedClubUrl,
  dataType: 'json',
  type: 'GET',
  async:false,
}).done(function(response) {
  console.log(response);
  name = response.name;
  shortName = response.code;
  badge = response.crestUrl;
  value = response.squadMarketValue;
  fixturesUrl = response._links.fixtures.href;
  teamUrl = response._links.players.href;

});

function toggleDiv(divId) {
   $("#"+divId).toggle();
}


var splicedFixtureUrl = fixturesUrl.splice(4, 0, "s");
var splicedTeamUrl = teamUrl.splice(4, 0, "s");
var splicedBadge = badge.splice(4, 0, "s");
// console.log(splicedFixtureUrl);
// console.log(splicedTeamUrl);



$.ajax({
  headers: { 'X-Auth-Token': '5716265e0fea4e1b9583f371281e2a03' },
  url: splicedFixtureUrl,
  dataType: 'json',
  type: 'GET',
  async: false,
}).done(function(response) {
  // console.log(response);
  lastOpponent = response.fixtures[5].homeTeamName;
  lastResultAway = response.fixtures[5].result.goalsAwayTeam;
  lastResultHome = response.fixtures[5].result.goalsHomeTeam;
  opponent = response.fixtures[6].awayTeamName;


  // TODO: FINNE NESTE MOTSTANDER

});

$.ajax({
  headers: { 'X-Auth-Token': '5716265e0fea4e1b9583f371281e2a03' },
  url: splicedTeamUrl,
  dataType: 'json',
  type: 'GET',
  async: false,
}).done(function(response) {
  // console.log(response);
  squadSize = response.count;

});

// SETTING IMAGE
var img = new Image();
img.setAttribute("style", "width:30px; height:30px; padding-right:10px;");
img.setAttribute("src", splicedBadge);
document.getElementById("img").appendChild(img);

// PRINTS IN HTML
document.getElementById("name").innerHTML = name;
document.getElementById("value").innerHTML = value;
document.getElementById("squadSize").innerHTML = squadSize;
document.getElementById("shortName").innerHTML = shortName;

// PRINTS DIFFERENT JSON VALUES
// console.log("Name: " + name);
// console.log("Value: " + value);
// console.log(badge);
// console.log("Current squad size: " + squadSize + " players")
// console.log("Last fixture: " + lastOpponent);
// console.log("Last result: " + lastResultHome + " - " + lastResultAway);
// console.log("Next fixture: " + opponent);

var squadUrl = 'https://api.football-data.org/v1/teams/' + clubId + '/players'

$.ajax({
  headers: { 'X-Auth-Token': '5716265e0fea4e1b9583f371281e2a03' },
  url: squadUrl,
  dataType: 'json',
  type: 'GET',
  async: false,
}).done(function(response) {
  console.log(response);


  response.players.forEach(function(entry) {
    var table = document.getElementById("playerTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = entry.jerseyNumber;
    cell2.innerHTML = entry.name;
    cell3.innerHTML = entry.marketValue;
    cell4.innerHTML = entry.nationality;
    cell5.innerHTML = entry.position;

  });

});
