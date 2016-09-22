$.ajax({
  headers: { 'X-Auth-Token': '5716265e0fea4e1b9583f371281e2a03' },
  url: 'https://api.football-data.org/v1/competitions/426/leagueTable',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
  // do something with the response, e.g. isolate the id of a linked resource
  // var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
  // var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
  // var teamId = res[1];
  var teamName = response.standing[0].teamName;
  var position = response.standing[0].position;
  var points = response.standing[0].points;
  var badge = response.standing[0].crestURI;
  document.getElementById("teamName").innerHTML = teamName;
  document.getElementById("position").innerHTML = position;
  document.getElementById("points").innerHTML = points;
  var img = new Image();
  img.src = badge;
  img.setAttribute("style", "width:25px");
  document.getElementById("badge").appendChild(img);

  for (i = 0; response.standing.length; i++ ) {
    console.log(response.standing[i].teamName);
    console.log(response.standing[i].points);
  }

});


// http://api.football-data.org/v1/competitions/426/leagueTable
