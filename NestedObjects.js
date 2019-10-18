var storage = {
    "Fridge": {
        "inside":  {
            "Fruit1":"Apple",
            "Fruit2":"Per"
        },
        "Outside":{
            "Vegetables":{
                "veg1":"tomato",
                "vag2":"Chilli",
                "veg3":"Capsucum"
            }
        }
    }
}
 var fridgeBoxContents = storage.Fridge.inside.Fruit1;
 console.log(fridgeBoxContents);