function WriteInChat(strMsg){
    var txtIn = Helpers.GetInputText(Helpers.GetGameNumber());    
    txtIn.value = strMsg;
    Helpers.ClickSend(Helpers.GetGameNumber());
}

function AddCardToDeck(cardNumber){
    var strCommand = "/addcardcast " + cardNumber.toString();
    WriteInChat(strCommand);
}


function OnAddCardsClick() {
    var selection = document.getElementById("cbxCardPack");
    
    var selectedCards = selection.value.split(",");

    for(var idx = 0; idx < selectedCards.length; idx++)
        AddCardToDeck(selectedCards[idx]);
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

            exportFunction(OnAddCardsClick, window, {defineAs: "OnAddCardsClick" })
        }
    }
    else setTimeout(FakeMain, 500);
    
}

window.onhashchange = FakeMain;
FakeMain();