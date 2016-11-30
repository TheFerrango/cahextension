class StorageHelper
{
    static WriteToMemory(fieldName, data, serialize)
    {
        console.log("wow")
        
        if(serialize)
            data = JSON.stringify(data);
        browser.storage.local.set({fieldName : data });
    }

    static ReadFromMemory(fieldName, deserialize){        
        var data = browser.storage.local.get(fieldName);
        if(deserialize)
            data = JSON.parse(data);
        return data; 
    }

    static RemoveFromMemory(fieldName)
    {

    }
}