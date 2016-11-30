function WriteInChat(strMsg){
    console.log("hello")
    var txtIn = Helpers.GetInputText(Helpers.GetGameNumber());
    
    txtIn.value = strMsg;
    Helpers.ClickSend(Helpers.GetGameNumber());
}

function AddCardToDeck(cardNumber){
    var strCommand = "/addcardcast " + cardNumber.toString();
    WriteInChat(strCommand);
}





///
/// ##########################
/// #                        #
/// #   FAKE MAIN FUNCTION   #
/// #                        #
/// ##########################
///

function FakeMain(){
   var box = Helpers.GetOptionsBox();
   var cont = UIAddition.CreateButtons();

   box.appendChild(cont);
}

FakeMain();
