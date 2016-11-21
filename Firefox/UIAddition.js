class UIAddition {
    static CreateButtons(){
        var holDiv = document.createElement("div");
        holDiv.appendChild(document.createElement("hr"));

        var selectList = document.createElement("select");
        
        var selItem =document.createElement("option");
        selItem.appendChild(document.createTextNode("RWBY - common"));        
        selItem.setAttribute("value", "ADASS, 56466,AS8S6");
        selectList.appendChild(selItem);

        holDiv.appendChild(selectList);

        var newBtn = document.createElement("button");
        newBtn.appendChild(document.createTextNode("Add cards"));        
        newBtn.setAttribute("onclick", "alert('boom')");

        holDiv.appendChild(newBtn);

        newBtn = document.createElement("button");
        newBtn.appendChild(document.createTextNode("Manage presets"));        
        newBtn.setAttribute("onclick", "alert('boom')");
        newBtn.style.cssFloat = "right";
        holDiv.appendChild(newBtn);

        return holDiv;
    }
}