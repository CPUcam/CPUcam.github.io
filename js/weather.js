$(document).ready(function(){
  var zip = "";
  $('.btn').click(function(){
    zip = document.getElementById('zip').value;

  if (zip.length == 5) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&APPID=58229a4e217926a79008cbfb61134884", function(data){
      var temp = Math.round((data.main.temp - 273.15)* 1.8000 + 32.00);
      var high = Math.round((data.main.temp_max - 273.15)* 1.8000 + 32.00);
      var low = Math.round((data.main.temp_min - 273.15)* 1.8000 + 32.00);
      var condition = data.weather[0].id;
      var city = data.name;
      console.log(data);
      $('.wi').addClass("wi-owm-" + condition);
      $('.current').text(temp + '\u00B0' + 'F' + ', High: ' + high + ', Low: ' + low);
    });
  }
  else {
    alert("Uh oh! Please enter a valid 5-digit, U.S. zipcode.");
  }
  });
});
