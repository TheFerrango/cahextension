function AddJSFileToDOM(jsFileName) {
    var s = document.createElement('script');            
    s.src = chrome.extension.getURL(jsFileName);
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}

///
/// ##########################
/// #                        #
/// #   FAKE MAIN FUNCTION   #
/// #                        #
/// ##########################
///

function FakeMain(){        
    if(Helpers.IsGameWindow())
    {   
        if(!Helpers.UIAlreadyAdded()){
            var box = Helpers.GetOptionsBox();
            var cont = UIAddition.CreateButtons();
            
            box.appendChild(cont);
            
            AddJSFileToDOM("helpers.js");
            AddJSFileToDOM("interaction.js");

            Helpers.AddMessageToChat(Helpers.GetGameNumber(), "CAHExtension initialized. Card system standing ready.")
        }
    }
    else setTimeout(FakeMain, 2000);
}

window.onhashchange = FakeMain;
FakeMain();