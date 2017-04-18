function AddJSFileToDOM(jsFileName) {
     var s = document.createElement('script');
            // TODO: add "script.js" to web_accessible_resources in manifest.json
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
        }
    }
    else setTimeout(FakeMain, 500);
    
}

window.onhashchange = FakeMain;
FakeMain();