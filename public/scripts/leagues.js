$.ajax({
  headers: { 'X-Auth-Token': '5716265e0fea4e1b9583f371281e2a03' },
  url: 'https://api.football-data.org/v1/competitions/?season=2016',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {

  console.log(response);
  // var badge = response.standing[0].crestURI;


  response.forEach(function(entry) {
    if (entry.numberOfTeams > 25)
    {
      return;
    }else if (entry.numberOfMatchdays < 12) {
      return;
    }
    else {
    var table = document.getElementById("jsontable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // var img = new Image();
    // img.setAttribute("style", "width:20px; height:20px");
    // img.setAttribute("src", entry.crestURI)

    cell1.innerHTML = entry.caption;
    cell2.innerHTML = entry.numberOfTeams;
    cell3.innerHTML = entry.currentMatchday;
    cell4.innerHTML = entry.numberOfMatchdays;

};

  })
});
