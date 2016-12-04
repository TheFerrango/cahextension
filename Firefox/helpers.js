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
    var fd = document.querySelector("#main_holder fieldset");
    return fd;
}

     static ClickSend  (gameNumber){
        var btnIn = document.querySelector("#tab-chat-game_" + gameNumber.toString() + " > input.chat_submit");
        btnIn.click()
    }

    static IsGameWindow()
    {
        var optBox = Helpers.GetOptionsBox();
        return optBox != null; 
    }

}



/*
    get element by id su leave game e controlla CSS

*/