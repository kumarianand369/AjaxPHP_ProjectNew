// Preloader Script

let timeTable;
const myFunction = () => {
  timeTable = setTimeout(showPage, 1000);
}
const showPage = () => {
  document.getElementById('table').style.display = 'block';
  document.getElementById('preloader').style.display = 'none';
  
}

$('#btnRun').click(function() {

    $.ajax({
        url: "libs/php/getCountryInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            country: $('#selCountry').val(),
            lang: $('#selLanguage').val()
           
        },
        success: function(result) {
          
            console.log(JSON.stringify(result));
            if (result.status.name == "ok") {

                $('#txtContinent').html(result['data'][0]['continent']);
                $('#txtCapital').html(result['data'][0]['capital']);
                $('#txtLanguages').html(result['data'][0]['languages']);
                $('#txtPopulation').html(result['data'][0]['population']);
                $('#txtArea').html(result['data'][0]['areaInSqKm']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
           
        }
    }); 

});

//Earthquackes
  

$('#btnearthquakes1').click(function () {
    //alert("hi earthquakes");
   $.ajax({
     url: 'libs/php/earthquakes2.php',
     type: 'POST',
     dataType: 'json',
       data: {
           
           
                 north: $('#enorth').val(),
                 south: $('#esouth').val(),
                 east: $('#eeast').val(),
                 west: $('#ewest').val()
           
                
             },
     success: function (result,status) {
       
       //  alert("hi earthquakes data");
            console.log(JSON.stringify(result));
            $('#txtSrc').html(result['earthquakes'][0]['src']);
            $('#txtDateTime').html(result['earthquakes'][0]['datetime']);
            $('#txtDepth').html(result['earthquakes'][0]['depth']);
            $('#txtLng').html(result['earthquakes'][0]['lng']);
            $('#txtMagnitude').html(result['earthquakes'][0]['magnitude']);
            $('#txtLat').html(result['earthquakes'][0]['lat']);
         
             },
             error: function(jqXHR, textStatus, errorThrown) {
                 
             }
            
         });
     
     });




     //findNearby

$('#btnfindNearby').click(function () {
    //  alert("hi findNearby");
     $.ajax({
       url: 'libs/php/findNearby.php',
       type: 'POST',
       dataType: 'json',
         data: {
             
           
                  lat: $('#flat').val(),
                  lng:$('#flng').val()
                 
                  
               },
       success: function (result,status) {
       
       //   alert("hi findNearby data6");
              console.log(JSON.stringify(result));

              $('#txtadminCode1').html(result['geonames'][0]['adminCode1']);
              $('#txtlng').html(result['geonames'][0]['lng']);
             $('#txtdistance').html(result['geonames'][0]['distance']);
             $('#txtgeonameId').html(result['geonames'][0]['geonameId']);
            
               },
               error: function(jqXHR, textStatus, errorThrown) {
                   
               }
              
           });
       
       });
   
   
   
  
  
   
  //Weather
    
  
  $('#btnweather').click(function () {
    //  alert("hi btnweather6");
     $.ajax({
       url: 'libs/php/weather.php',
       type: 'POST',
       dataType: 'json',
         data: {
             
             
                  north: $('#wnorth').val(),
                   south: $('#wsouth').val(),
                   east: $('#weast').val(),
                   west: $('#wwest').val()
                  
               },
       success: function (result,status) {
       
        //  alert("hi weather data6");
              console.log(JSON.stringify(result));
              $('#result').html('');
            $('#txtdatetime').html(result['weatherObservations'][0]['datetime']);
             $('#txtdewPoint').html(result['weatherObservations'][0]['dewPoint']);
            $('#txtlng').html(result['weatherObservations'][0]['lng']);
            $('#txttemperature').html(result['weatherObservations'][0]['temperature']);
            $('#txthumidity').html(result['weatherObservations'][0]['humidity']);
           
               },
               error: function(jqXHR, textStatus, errorThrown) {
                   
               }
              
           });
       
       });
   
   
  
  function buttonFirst(btn) {
      var srcElement = document.getElementById(btn);
      if (srcElement != null) {
          if (srcElement.style.display == "block") {
              srcElement.style.display = 'none';
          }
          else {
              srcElement.style.display = 'block';
          }
          return false;
      }
  }
  
  
  function buttonSecond(btn) {
      var srcElement = document.getElementById(btn);
      if (srcElement != null) {
          if (srcElement.style.display == "block") {
              srcElement.style.display = 'none';
          }
          else {
              srcElement.style.display = 'block';
          }
          return false;
      }
  }
  
  
  
  function buttonThird(btn) {
      var srcElement = document.getElementById(btn);
      if (srcElement != null) {
          if (srcElement.style.display == "block") {
              srcElement.style.display = 'none';
          }
          else {
              srcElement.style.display = 'block';
          }
          return false;
      }
  }
  
  
  function buttonFourth(btn) {
      var srcElement = document.getElementById(btn);
      if (srcElement != null) {
          if (srcElement.style.display == "block") {
              srcElement.style.display = 'none';
          }
          else {
              srcElement.style.display = 'block';
          }
          return false;
      }
  }
  
  

