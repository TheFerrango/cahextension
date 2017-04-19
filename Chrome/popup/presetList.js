
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("newBtn")) {
    document.getElementById("divNewSet").style.display="";
    document.getElementById("divExtPreset").style.display="none";
    document.getElementById("HDFNewEdit").value = "NEW";
  }
  else if (e.target.classList.contains("cancelBtn") || e.target.classList.contains("saveBtn")) {
    var inputTitle = document.getElementById('txtSetName');
    var inputList = document.getElementById('txtSetCards');


    if(e.target.classList.contains("saveBtn"))
    {
      var presetTitle = inputTitle.value;
      var presetList =  inputList.value.split(',');

      if(presetList && presetTitle)
      {
        for(var idx = 0; idx < presetList.length; idx++)
          presetList[idx] = presetList[idx].trim();
        SavePreset(presetTitle, presetList);
      }else {        
        return;     
      }
    } 

    inputTitle.value="";
    inputList.value="";

     document.getElementById("divNewSet").style.display="none";
     document.getElementById("divExtPreset").style.display="";
  }
});

function onError(error) {
  console.log(error);
}

function initialize() {
  StorageHelper.ReadFromMemory(null).then(function (results) {
    var noteKeys = Object.keys(results);
    for(var noteKey of noteKeys) {
      var curValue = results[noteKey];
      displayNote(noteKey,curValue);
    }
  }, onError);
}

function SavePreset(title, body) {
  var oldTitle = document.getElementById("HDFNewEdit").value;
  if(oldTitle) StorageHelper.RemoveFromMemory(oldTitle);

  var storingNote = StorageHelper.WriteToMemory(title,body);
  storingNote.then(() => {
    clearSets();
    initialize();
  }, onError);
}

function clearSets(){
  var noteContainer = document.getElementById('setsContainer');
  while (noteContainer.firstChild) {
    noteContainer.removeChild(noteContainer.firstChild);
  }
}


function displayNote(title, body) {
  var noteContainer = document.getElementById('setsContainer');
  /* create note display box */
  var noteDisplay = document.createElement('div');
  
  var noteName = document.createElement('div');
  
  var actionDiv = document.createElement('div');
  
  var editBtn = document.createElement('img');
  var deleteBtn = document.createElement('img');

  noteDisplay.setAttribute('class','preset');
  noteName.textContent = title;
  
  editBtn.setAttribute('class', 'edit');
  editBtn.setAttribute('src', '../icons/edit.png');
  //editBtn.textContent = "Edit set";
 
  deleteBtn.setAttribute('class','delete');
  deleteBtn.setAttribute('src', '../icons/delete.png');
  //deleteBtn.textContent = 'Delete set';

  actionDiv.appendChild(editBtn);
  actionDiv.appendChild(deleteBtn);

  noteDisplay.appendChild(noteName);
  noteDisplay.appendChild(actionDiv);

  noteContainer.appendChild(noteDisplay);

  /* set up listener for the delete and edit functionality */

  editBtn.addEventListener('click',function(e){
    var inputTitle = document.getElementById('txtSetName');
    var inputList = document.getElementById('txtSetCards');
    document.getElementById("HDFNewEdit").value = title;
    inputTitle.value = title,
    inputList.value = body.join(",");
     document.getElementById("divNewSet").style.display="";
    document.getElementById("divExtPreset").style.display="none";
    
  })

   deleteBtn.addEventListener('click',function(e){
    evtTgt = e.target;   
    evtTgt.parentNode.parentNode.parentNode.removeChild(evtTgt.parentNode.parentNode);
    StorageHelper.RemoveFromMemory(title);
  })
}

initialize();