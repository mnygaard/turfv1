var fixturesUrl;
var opponent;
var lastOpponent;
var lastResultAway;
var lastResultHome;
var name;
var badge;
var value;
var teamUrl;
var squadSize;

$.ajax({
  headers: { 'X-Auth-Token': '5716265e0fea4e1b9583f371281e2a03' },
  url: 'https://api.football-data.org/v1/teams/57',
  dataType: 'json',
  type: 'GET',
  async:false,
}).done(function(response) {
  console.log(response);
  name = response.name;
  badge = response.crestUrl;
  value = response.squadMarketValue;
  fixturesUrl = response._links.fixtures.href;
  teamUrl = response._links.players.href;

});

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

var splicedFixtureUrl = fixturesUrl.splice(4, 0, "s");
var splicedTeamUrl = teamUrl.splice(4, 0, "s");
console.log(splicedFixtureUrl); // "foo bar baz"


$.ajax({
  headers: { 'X-Auth-Token': '5716265e0fea4e1b9583f371281e2a03' },
  url: splicedFixtureUrl,
  dataType: 'json',
  type: 'GET',
  async: false,
}).done(function(response) {
  console.log(response);
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
  console.log(response);
  squadSize = response.count;

});
// SETTING IMAGE
var img = new Image();
img.setAttribute("style", "width:150px; height:150px");
img.setAttribute("src", badge);
document.getElementById("img").appendChild(img);
// PRINTS IN HTML
document.getElementById("name").innerHTML = name;
document.getElementById("value").innerHTML = "Squad Market Value: " + value;
document.getElementById("squadSize").innerHTML = "Squad size: " + squadSize;


// PRINTS DIFFERENT JSON VALUES
console.log("Name: " + name);
console.log("Value: " + value);
console.log(badge);
console.log("Current squad size: " + squadSize + " players")
console.log("Last fixture: " + lastOpponent);
console.log("Last result: " + lastResultHome + " - " + lastResultAway);
console.log("Next fixture: " + opponent);
