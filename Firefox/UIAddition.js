class UIAddition {
    static CreateButtons(){
        var holDiv = document.createElement("div");
        holDiv.appendChild(document.createElement("hr"));

        var selectList = document.createElement("select");

     
  var gettingAllStorageItems = browser.storage.local.get(null);
  gettingAllStorageItems.then((results) => {
    var noteKeys = Object.keys(results[0]);
    for(var noteKey of noteKeys) {
      var curValue = results[0][noteKey];
        var selItem =document.createElement("option");
        selItem.appendChild(document.createTextNode(noteKey));        
        selItem.setAttribute("value", curValue);
        selectList.appendChild(selItem);
        console.log(selItem);
    }
  }, function(){console.log("boom errore")});


       

        holDiv.appendChild(selectList);

        var newBtn = document.createElement("button");
        newBtn.appendChild(document.createTextNode("Add cards"));        
        newBtn.setAttribute("onclick", "alert('boom')");
        holDiv.appendChild(newBtn);

        return holDiv;
    }

    static boomer()
    {
        alert("KABLAM")
    }
}