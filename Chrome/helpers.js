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

    static IsCAHCompatibleGame ()
    {
        return true;
        var cahObj = window["cah"];
        if(cah && cah.nickname)
            return true;
        else
            return false;
    }

    static IsGameWindow()
    {
        console.log("wow");
        var optBox = Helpers.GetOptionsBox();
        return optBox != null; 
    }
}
