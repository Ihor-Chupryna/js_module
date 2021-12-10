// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
const user = document.forms.userForm;
console.log(user);
user.onsubmit = function (ev) {
    ev.preventDefault();
    let name = this.userName.value;
    let age = this.userAge.value;
    let userObj = {
        name: name,
        age: age
    }
    localStorage.setItem(name, JSON.stringify(userObj));
}

// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному схов
const car = document.forms.carForm;
car.onsubmit = (ev) => {
    ev.preventDefault();
    let model = car.carModel.value;
    let type = car.carType.value;
    let volume = car.carVolume.value;
    let carObj = {model: model, type: type, volume: volume}
    let getCar = JSON.parse(localStorage.getItem('cars'));
    console.log(getCar);
    if (!getCar) {
        getCar = [];
        getCar.push(carObj);
    } else {
        getCar.push(carObj);
    }
    localStorage.setItem('cars', JSON.stringify(getCar));
}
