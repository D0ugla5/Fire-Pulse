const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

const musicLibrary = [
    { title: 'Song 1', artist: 'Artist 1' },
    { title: 'Song 2', artist: 'Artist 2' },
    { title: 'Song 3', artist: 'Artist 3' }
];

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('signupPage').style.display = 'none';
        document.getElementById('libraryPage').style.display = 'block';
        loadMusicLibrary();
    } else {
        alert('Invalid credentials');
    }
}

function signup() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (password === confirmPassword) {
        users.push({ username, password });
        alert('Signup successful! Please log in.');
        showLogin();
    } else {
        alert('Passwords do not match.');
    }
}

function logout() {
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('signupPage').style.display = 'none';
    document.getElementById('libraryPage').style.display = 'none';
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}

function showSignup() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('signupPage').style.display = 'block';
}

function showLogin() {
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('signupPage').style.display = 'none';
}

function loadMusicLibrary() {
    const libraryElement = document.getElementById('musicLibrary');
    libraryElement.innerHTML = '';

    musicLibrary.forEach(song => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        libraryElement.appendChild(li);
    });
}