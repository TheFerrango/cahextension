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

function OnSaveUsedDecksClick() {
    var newDecks = GetUsedDecks();

    if(newDecks){
        var newName = prompt("A new set will be created for the following decks: " + newDecks + "\nPlease provide a name.");
        if(newName)
            StorageHelper.WriteToMemory(newName, newDecks);
    }

}

function GetUsedDecks() {
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
