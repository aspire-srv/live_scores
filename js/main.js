$(document).ready(function () {
  $.get("https://cricketapi-icc.pulselive.com/fixtures?matchTypes=T20I%2CT20%2CODI%2CFIRST_CLASS%2CLIST_A&tournamentTypes=I%2CWI&teamTypes=m&w&matchStates=C&page=0&pageSize=60&sort=desc", function (data) {
    var data1 = data.content;
    console.log(data1);
    for (var i = 0; i < data1.length; i++) {
      getData(data1[i]);
    }
  });


  function getData(data) {
    console.log(data);
    $(".product-conatiner").append(`<div class="product-img">
  <div class="card mb-3" style="width: 70%;">
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body" >
        <h5 class="card-title">${data.tournamentLabel}</h5>
        <p class="card-text"><span style="color:#${data.scheduleEntry.team1.team.primaryColor};">${data.scheduleEntry.team1.team.fullName}</span> <strong>vs</strong> <span style="color:#${data.scheduleEntry.team2.team.primaryColor};"> ${data.scheduleEntry.team2.team.fullName} </span>, ${data.scheduleEntry.description}</p>
        <p class="card-text"><small class="text-muted">${data.timestamp.slice(0, 18)}, ${data.scheduleEntry.venue.city}, ${data.scheduleEntry.venue.fullName}, ${data.scheduleEntry.venue.country}</small></p>
        <div class="scores">
        <div class="team1">
            <p style="color:#${data.scheduleEntry.team1.team.primaryColor};"><strong>${data.scheduleEntry.team1.team.abbreviation}</strong></p>
            <p><strong>${data.scheduleEntry.team1.innings ? data.scheduleEntry.team1.innings[0].runs : ""} /${data.scheduleEntry.team1.innings ? data.scheduleEntry.team1.innings[0].wkts : ""} (${data.scheduleEntry.team1.innings ? data.scheduleEntry.team1.innings[0].overProgress : ""})</strong></p>
        </div>
        <div class="team1">
         <p style="color:#${data.scheduleEntry.team2.team.primaryColor};"><strong>${data.scheduleEntry.team2.team.abbreviation}</strong></p>
         <p><strong>${data.scheduleEntry.team2.innings ? data.scheduleEntry.team2.innings[0].runs : ""} /${data.scheduleEntry.team2.innings ? data.scheduleEntry.team2.innings[0].wkts : ""} (${data.scheduleEntry.team2.innings ? data.scheduleEntry.team2.innings[0].overProgress : ""})</strong></p>
     </div>
     <div class="result">${data.scheduleEntry.matchStatus.text}</div>
    </div>
      </div
    </div>
  </div>
</div>
            
   </div>`);
  }
});


// style="background-image: linear-gradient(#${data.scheduleEntry.team1.team.secondaryColor}, #${data.scheduleEntry.team2.team.primaryColor});


//https://cricketapi-icc.pulselive.com/fixtures?matchTypes=T20I%2CT20%2CTEST%2CODI%2CFIRST_CLASS%2CLIST_A&tournamentTypes=I%U19I&teamTypes=m&matchStates=C&page=0&pageSize=40&sort=desc

//https://cricketapi-icc.pulselive.com/fixtures?matchTypes=T20I%2CT20%2CTEST%2CODI%2CFIRST_CLASS%2CLIST_A&tournamentTypes=I%2CWI&teamTypes=m&matchStates=C&page=0&pageSize=40&sort=desc