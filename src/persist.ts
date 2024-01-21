export const savePersistData = (key: string, value: string | Record<string, any>) => {
    const stringifyValue = JSON.stringify(value);

    return window.localStorage.setItem(key, stringifyValue);
}

export const getPersistData = (key: string) => {
    const jsonData: string | null  = window.localStorage.getItem(key);

    if (jsonData !== null) {
        return JSON.parse(jsonData);
    }

}
  
export const clearPersistData = () => {
    window.localStorage.clear()
}