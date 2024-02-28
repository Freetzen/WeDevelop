export const userDate = (key, elements) => {
    localStorage.setItem(key, JSON.stringify(elements))   
}

export const clearLocalStorage = () => {
    localStorage.removeItem('info');
};
  

export const getUserData = () => {
    const userLocal = JSON.parse(localStorage.getItem('info'));
    return userLocal
};
