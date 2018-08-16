class UIAddition {
    static CreateButtons(){
        var holDiv = document.createElement("div");
        holDiv.setAttribute("id", "presetsCustomDiv");
        holDiv.appendChild(document.createElement("hr"));
       
        var selectList = document.createElement("select");
        selectList.setAttribute("id", "cbxCardPack");
        
        StorageHelper.ReadFromMemory(null).then(function(results)  {
            console.log(results);
            //results = results[0];
      
            var noteKeys = null
            
            try{
                noteKeys =Object.keys(results[0]);
            } 
            catch(error)
            {
                 noteKeys =Object.keys(results);
            }
            
            for(var noteKey of noteKeys) {
                var curValue = results[noteKey];
                var selItem =document.createElement("option");
                selItem.appendChild(document.createTextNode(noteKey));        
                selItem.setAttribute("value", curValue);
                selectList.appendChild(selItem);                
            }
        }, function(err) { console.error(err) });      

        holDiv.appendChild(selectList);

        var newBtn = document.createElement("button");
        newBtn.appendChild(document.createTextNode("Add cards"));        
        newBtn.setAttribute("onclick", "OnAddCardsClick()");
        newBtn.setAttribute("id", "btnAddCardDecks");
        
        var stealBtn = document.createElement("button");
        stealBtn.appendChild(document.createTextNode("Save cards in use"));        
        stealBtn.setAttribute("onclick", "OnSaveUsedDecksClick()");
        stealBtn.setAttribute("id", "btnSaveCardDecks");
        

        holDiv.appendChild(newBtn);
        holDiv.appendChild(stealBtn);
        
        return holDiv;
    }
}