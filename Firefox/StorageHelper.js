class StorageHelper
{
    static WriteToMemory(fieldName, data, serialize)
    {   
        if(serialize)
            data = JSON.stringify(data);
        return browser.storage.local.set({ [fieldName] : data });
    }

    static ReadFromMemory(fieldName){        
        var data = browser.storage.local.get(fieldName);        
        return data; 
    }

    static RemoveFromMemory(fieldName)
    {
         browser.storage.local.remove(fieldName);
    }
}