const usersDiv = document.createElement('div');
usersDiv.classList.add('wrapper');
document.body.appendChild(usersDiv);
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => users.forEach(user => {
        let userDiv = document.createElement('div');
        userDiv.classList.add('user-style');
        usersDiv.appendChild(userDiv);
        userDiv.innerHTML = `<h3>id: ${user.id}</h3><h1>${user.name}</h1>`;
        const userObj = {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
            geoLat: user.address.geo.lat,
            geoLng: user.address.geo.lng,
            phone: user.phone,
            website: user.website,
            companyName: user.company.name,
            companyCatchPhrase: user.company.catchPhrase,
            companyBs: user.company.bs
        };
        const userDetailsBtn = document.createElement('button');
        userDetailsBtn.classList.add('user-button');
        userDetailsBtn.innerText = 'details';
        userDiv.appendChild(userDetailsBtn);
        userDetailsBtn.onclick = () => {
            document.location.href = 'user-details.html';
            localStorage.setItem('user', JSON.stringify(userObj));
        }
    }));









