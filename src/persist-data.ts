export const savePersistData = (key, value) => {
    const stringifyValue = JSON.stringify(value);

    return window.localStorage.setItem(key, stringifyValue);
}

export const getPersistData = (key) => {
    const jsonData = window.localStorage.getItem(key)

    return JSON.parse(jsonData);
}
  
export const clearPersistData = () => {
    window.localStorage.clear()
}