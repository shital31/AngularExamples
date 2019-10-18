 function lookupObjects(val){
     var result = "";
     var lookup = {
         "Shital":"Pune",
         "Swapnil":"Satara",
         "Aniket":"Nanded",
         "Sagar": "Kokan",
         "Swaraj":"Manglore"

     };

     function checkObj(checkProp){
         if (lookupObjects.hasOwnProperty(checkProp)){
             return lookupObjects[checkProp];
         }else{
             return "Not Found"
         }
     }
     result = lookup[val];
     return result;
 }
 console.log( lookupObjects("Shubhangi") );


 //complex objects
 var myMusic = [
     {
         "artist":"Arman Malik",
         "title": "Pioan Man",
         "release_year":"2019",
         "Formats":["CD","8T","LP"],
         "gold":true
     },
     {

        "artist":"Carnes",
        "title":"Man",
        "Release_year": "2018",
        "Formats":["CD","MP3","Audio"],
        "NewRelease":true

     }
 ]
 console.log(myMusic);
