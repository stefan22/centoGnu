function load() {
debugger;  
var xhr = new XMLHttpRequest();
var xhrp;
xhr.onreadystatechange = function () {
  //if(this.status == 200) {
  if (this.readyState == 4 && this.status == 200) {
    //console.log(xhr.responseText);
    xhrp = JSON.parse(this.responseText);
    //console.log(xhrp);
    //console.log(xhrp.events.length);
    var events = xhrp.events.length;

    var handler = document.querySelector('._3Ja5nsZNXVRSBY5FSetfAi');
    var pregames;

    var content = ' ';

    var pre, odds, hasexpired;
    var iswhen, istoday, tevts;
    var count = 0;
    var lastcall = 0;


    content += '<div id="Carousel" class="carousel slide">';
    content += '<div class="carousel-inner">';
    content += '<div class="item">';


    for (var i = 0; i < xhrp.events.length; i++) {
      tevts = xhrp.events.length;
      count++;

      pre = xhrp.events[i].event;
      odds = xhrp.events[i].betOffers;
      hasexpired = xhrp.events[i].liveData;
      //console.log(xhrp.events[i].event.name);
      iswhen = pre.start;

      istoday = new Date();
      istoday = istoday.getTime();


      if (Number(istoday) <= Number(iswhen)) {

        iswhen = new Date(iswhen).toUTCString();
        iswhen = iswhen.replace(':00 GMT', '');


      } //coming up


      if (hasexpired !== undefined) {

        if (hasexpired.open == true) {
          //games's on
          console.log('games on skip it! no data to pull');
          continue;

        } //if


      } //if
      else {

        //setTimeout(removeMatch(i),45);


      }
          
          //'"data-id=nada-de-nada"' +


      content += ' <div class="_2LrNf_NvtrBLjlIOAsdrUx">';
      content += ' <div class="_3-odHunguDZIT9dHmFF29U">';
      content += ' <div class="DC7dFScaZtIUxM27dKnaT">';
          
          
          
              
      content += ' <div class="_1E5LWOkRG3O56f3HO99jo7"><a href="https://www.grosvenorcasinos.com/sport#filter/football/england/premier_league">' + pre.group + '</a></div>';


      content += ' <div class="_2u-vzJa294rE4akQDb2Lvp">' + iswhen + '</div>';
      content += ' </div>';
      content += ' <div class="_2ZGrkQkADN6UCnHD2zeyBV">';
      content += ' <div class="_29A9JKLUCvdCZgU1LA_YsU _3QLR5_N8Xmm9fMcPQQtCWS">';
      content += ' <span class="_3cgZi1U0EBvX4OE-J-pLgQ">' + pre.homeName + '</span></div>';

      content += ' <div class="_29A9JKLUCvdCZgU1LA_YsU _1FbptNEDPo-XN4vFgTHBlD">';
      content += ' <span class="_3cgZi1U0EBvX4OE-J-pLgQ">' + pre.awayName + '</span></div></div>';

      content += ' <div class="_2RLG4Me5TbicXjfYUxBfH2">';
      
               
                //link one
               content += ' <a class="KambiWidget-outcome _3VhzVuKZldCtRv5J2EPsSY" style="padding-top:5px;" href="https://www.grosvenorcasinos.com/sport#event/' + pre.id + '"> ';
    
      content += '<div class="KambiWidget-outcome__flexwrap">';
      content += '<div class="KambiWidget-outcome__label-wrapper">';
      content += '<span class="KambiWidget-outcome__label">' + pre.homeName + '</span>    ';
      content += ' <span class="KambiWidget-outcome__line"></span></div>';
      content += ' <div class="KambiWidget-outcome__odds-wrapper">';
      content += ' <span class="KambiWidget-outcome__odds">' + odds[0].outcomes[0].oddsFractional + '</span></div>   ';
      content += ' </div></a>';
          
          
                //link two
       content += ' <a class="KambiWidget-outcome _3VhzVuKZldCtRv5J2EPsSY" style="padding-top:5px;" href="https://www.grosvenorcasinos.com/sport#event/' + pre.id + '"> ';
      
              
      content += ' <div class="KambiWidget-outcome__flexwrap">';
      content += ' <div class="KambiWidget-outcome__label-wrapper"><span class="KambiWidget-outcome__label">Draw</span>';
      content += '<span class="KambiWidget-outcome__line"></span></div>';
      content += '<div class="KambiWidget-outcome__odds-wrapper">';
      content += '<span class="KambiWidget-outcome__odds">' + odds[0].outcomes[1].oddsFractional + '</span></div>';
      content += '</div></a>';
      
          
               
          
                //link three
                content += ' <a class="KambiWidget-outcome _3VhzVuKZldCtRv5J2EPsSY" style="padding-top:5px;" href="https://www.grosvenorcasinos.com/sport#event/' + pre.id + '"> ';
      
               
      content += '<div class="KambiWidget-outcome__flexwrap">';
      content += '<div class="KambiWidget-outcome__label-wrapper">';
      content += '<span class="KambiWidget-outcome__label">' + pre.awayName + '</span>';
      content += '<span class="KambiWidget-outcome__line"></span></div>';
      content += '<div class="KambiWidget-outcome__odds-wrapper">';
      content += '<span class="KambiWidget-outcome__odds">' + odds[0].outcomes[2].oddsFractional + '</span></div>';
      content += '</div></a></div></div></div>';


      if (count == tevts) {


        content += '</div>';
        

      }

      


    } //for


    function removeMatch(index) {
      console.log(index);
      if (document.querySelectorAll('._3Ja5nsZNXVRSBY5FSetfAi')[0].children != undefined || document.querySelectorAll('._3Ja5nsZNXVRSBY5FSetfAi')[0].children != null) {
        var x = document.querySelectorAll('._3Ja5nsZNXVRSBY5FSetfAi')[0].children;
        x[index].parentElement.removeChild(x[1]);

      }
    } //removeMatch   


    function callout() {
      clearTimeout(banup);
    }


    function runAgain() {

      if (handler != undefined) {
        handler.innerHTML += content;
        console.log(handler);
      }


      


    } //runAgain


    setTimeout(runAgain, 50);


  };
};


xhr.open("GET", "https://e4-api.kambi.com/offering/api/v3/gruk/listView/football/england/premier_league.json?lang=en_GB&market=GB&client_id=2&channel_id=1&ncid=1510577690619&categoryGroup=COMBINED&displayDefault=true", true);
xhr.send(null);
}
loda();