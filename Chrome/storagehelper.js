class StorageHelper
{
    static StorageContainer() 
    {
        var localStoreCont = null;

        try{
            if(browser && browser.storage)
                localStoreCont = browser.storage.local;
        }catch(err){
            localStoreCont = chrome.storage.sync;
        }

        return localStoreCont;        
    }


    static WriteToMemory(fieldName, data, serialize)
    {   
        if(serialize)
            data = JSON.stringify(data);
        
        
        return new Promise(function(resolve,reject){
                StorageHelper.StorageContainer().set({ [fieldName] : data });
                resolve();
            });
    }

    static ReadFromMemory(fieldName){        
        return new Promise(function(resolve,reject){
            StorageHelper.StorageContainer().get(fieldName, function(data){
                resolve(data);
            });
        });        
    }

    static RemoveFromMemory(fieldName)
    {
         StorageHelper.StorageContainer().remove(fieldName);
    }
}