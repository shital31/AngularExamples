 function lookupObjects(val){
     var result = "";
     var lookup = {
         "Shital":"Pune",
         "Swapnil":"Satara",
         "Aniket":"Nanded",
         "Sagar": "Kokan",
         "Swaraj":"Manglore"

     };
     result = lookup[val];
     return result;
 }
 console.log( lookupObjects("Sagar") );