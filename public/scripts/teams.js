var leagueId = window.prompt("Enter your League ID(424-440)");
var leagueUrl = 'https://api.football-data.org/v1/competitions/'+ leagueId + '/leagueTable';
console.log(leagueId);

$.ajax({
  headers: { 'X-Auth-Token': '5716265e0fea4e1b9583f371281e2a03' },
  url: leagueUrl,
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
  console.log(response);
  // var badge = response.standing[0].crestURI;
  var name = response.leagueCaption;
  document.getElementById("name").innerHTML = name;


  response.standing.forEach(function(entry) {
    var table = document.getElementById("jsontable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    var img = new Image();
    img.setAttribute("style", "width:20px; height:20px");
    img.setAttribute("src", entry.crestURI)

    cell1.innerHTML = entry.position;
    cell2.appendChild(img);
    cell3.innerHTML = entry.teamName;
    cell4.innerHTML = entry.wins;
    cell5.innerHTML = entry.draws;
    cell6.innerHTML = entry.losses;
    cell7.innerHTML = entry.points;


  })
});
