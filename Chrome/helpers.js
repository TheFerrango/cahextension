class Helpers
{
    static UIAlreadyAdded(){
        var settDiv = document.getElementById("presetsCustomDiv");
        return settDiv != null;
    }

    static SplitUrl  (urlStr, splitStr){    
        var splitUrl = urlStr.split(splitStr);
        return splitUrl;
    };

    static GetGameNumber  (){
        var splitUrl = Helpers.SplitUrl(document.URL, "=");
        return splitUrl[splitUrl.length-1];
    };

     static GetInputText (gameNumber){    
        console.log("#tab-chat-game_" + gameNumber.toString() + " > input.chat")
        var txtIn = document.querySelector("#tab-chat-game_" + gameNumber.toString() + " > input.chat");
        return txtIn;
    };

    static GetOptionsBox()
    {
        var fd = document.querySelector("#main_holder fieldset");
        return fd;
    }

    static ClickSend  (gameNumber){
        var btnIn = document.querySelector("#tab-chat-game_" + gameNumber.toString() + " > input.chat_submit");
        btnIn.click()
    }

    static IsGameWindow()
    {
        console.log("wow");
        var optBox = Helpers.GetOptionsBox();
        return optBox != null; 
    }

    static GetUsedDecks() 
    {
        var newDeck = "";
    
        // prende i messaggi mandati dall'admin, solo il primo link
        var adminMsg = document.querySelectorAll("span.admin > a:nth-child(1)")
    
        // parto da 1 perché tanto il primo elemento è sempre inutile
        if(adminMsg.length > 1){
            newDeck = adminMsg[1].innerText;
            
            // aggiungo le altre carte alla stringa
            for(var idx = 2; idx < adminMsg.length; idx++){
                var cardFragment = adminMsg[idx].innerText;
                if(cardFragment.length == 5){
                    newDeck = newDeck + ", " + cardFragment;
                }
            }
        }
    
        return newDeck;
    }

    static AddMessageToChat(gameNumber, strMessage){
        // TODO: implement reporting to the user via chat box, using Chrome's builtin
        // messaging system for extensions

        // var chatLog = document.querySelector("#tab-chat-game_" + gameNumber.toString() + " > .log");

        // var newLine = document.createElement("span");
        // newLine.setAttribute("title", "CAHExtension");
        // newLine.innerText = "{" + new Date().toLocaleTimeString() +  "} " + strMessage;

        // chatLog.appendChild(newLine);
        // chatLog.appendChild(document.createElement("br"));
    }
}
