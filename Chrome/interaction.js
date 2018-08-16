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
