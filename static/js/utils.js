// Make API call
export async function getData(URL){
    const response = await fetch(URL);
    const json = await response.json();
    return json
}

// Swap key value pairs
export function getKeyByValue(data, value) {
    for(let key in data ){
      if(data[key] == value){
        return key;
      }
    }
    return null;
}
