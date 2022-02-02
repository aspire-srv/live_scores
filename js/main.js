$(document).ready(function () {
  $.get("https://cricketapi-icc.pulselive.com/fixtures?matchTypes=T20I%2CT20%2CODI%2CFIRST_CLASS%2CLIST_A&tournamentTypes=I%2CWI&teamTypes=m&matchStates=C&page=0&pageSize=300&sort=desc", function (data) {
    console.log(data);
    var cricData = data.content;
    console.log(cricData);
    for (var i = 0; i < cricData.length; i++) {
      getData(cricData[i]);
    }
  });


  function getData(data) {
    // console.log(data);

    // if(data.scheduleEntry.matchStatus.outcome!=="N"){
    $(".product-conatiner").append(`<div class="product-img col-lg-12">
  <div class="card mb-3" style="width: 70%;">
  <div class="row g-0">
    <div class="">
      <div class="card-body" >
        <h5 class="card-title">${data.tournamentLabel}</h5>
        <p class="card-text"><span style="color:#${data.scheduleEntry.team1.team.primaryColor === "FFFFFF" ? 1866+"db" : data.scheduleEntry.team1.team.primaryColor };">${data.scheduleEntry.team1.team.fullName}</span> <strong>vs</strong> <span style="color:#${data.scheduleEntry.team2.team.primaryColor === "FFFFFF" ? 1866+"db" : data.scheduleEntry.team2.team.primaryColor };"> ${data.scheduleEntry.team2.team.fullName} </span>, ${data.scheduleEntry.description}</p>
        <p class="card-text"><small class="text-muted">${data.timestamp.slice(0, 10)}, ${data.scheduleEntry.venue.city}, ${data.scheduleEntry.venue.fullName}, ${data.scheduleEntry.venue.country}</small></p>
        <div class="scores">
        <div class="team1">
            <p style="color:#${data.scheduleEntry.team1.team.primaryColor === "FFFFFF" ? 1866+"db" : data.scheduleEntry.team1.team.primaryColor };"><strong>${data.scheduleEntry.team1.team.abbreviation}</strong></p>
            <p><strong>${data.scheduleEntry.team1.innings ? data.scheduleEntry.team1.innings[0].runs : "N"} /${data.scheduleEntry.team1.innings ? data.scheduleEntry.team1.innings[0].wkts : "N"} (${data.scheduleEntry.team1.innings ? data.scheduleEntry.team1.innings[0].overProgress : "N"})</strong></p>
        </div>
        <div class="team1">
         <p style="color:#${data.scheduleEntry.team2.team.primaryColor === "FFFFFF" ? 1866+"db" : data.scheduleEntry.team2.team.primaryColor};"><strong>${data.scheduleEntry.team2.team.abbreviation}</strong></p>
         <p><strong>${data.scheduleEntry.team2.innings ? data.scheduleEntry.team2.innings[0].runs : "N"} /${data.scheduleEntry.team2.innings ? data.scheduleEntry.team2.innings[0].wkts : "N"} (${data.scheduleEntry.team2.innings ? data.scheduleEntry.team2.innings[0].overProgress : "N"})</strong></p>
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


// for old matches

//https://cricketapi-icc.pulselive.com/fixtures?matchTypes=T20I%2CT20%2CODI%2CFIRST_CLASS%2CLIST_A&tournamentTypes=I%2CWI&teamTypes=m&w&matchStates=C&page=0&pageSize=30

// for womens matchess

//https://cricketapi-icc.pulselive.com/fixtures?matchTypes=T20I%2CT20%2CODI%2CFIRST_CLASS%2CLIST_A&tournamentTypes=I%2CWI&teamTypes=w&matchStates=C&page=0&pageSize=30&sort=desc