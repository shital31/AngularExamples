var collection ={
    123:{
        album:"old songs",
        artist:"kumar sanu",
        tracks:["lag ja gale","Aja Nachale" ]
    },
    456:{
        album:"gazal",  
        artist:"kailash khair",
        tracks:["something", "nothing"]
    },
     789:{
         album:"remix",
         artist:"himesh",
         tracks:["Aksar", "Xyz"]
     }
}
var collectioncopy = JSON.parse(JSON.stringify(collection));
console.log(collectioncopy)
function updateRecords(id,prop,value){
    if (value === ""){
        delete collection[id][prop]
    }else if(prop === "tracks"){
        collection[id][prop]= collection[id][prop] || []; 
        collection[id][prop].push(value);
    }else{
        collection[id][prop]=value;
    }
    return collection; 
}
console.log(updateRecords(456,"tracks","test"));
console.log(updateRecords(123,"artist","ABBA"));

