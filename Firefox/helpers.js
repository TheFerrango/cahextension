class Helpers
{
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
    var fd = document.querySelector("fieldset");
    return fd;
}

     static ClickSend  (gameNumber){
        var btnIn = document.querySelector("#tab-chat-game_" + gameNumber.toString() + " > input.chat_submit");
        btnIn.click()
    }

    static IsGameWindow()
    {
        var btnLeave = document.getElementById("leave_game");
        return btnLeave.style.display != "none";        
    }

}



/*
    get element by id su leave game e controlla CSS

*/