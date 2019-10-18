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

