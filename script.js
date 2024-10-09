const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

const musicLibrary = [
    { title: 'Sound of silencs', artist: 'Unknown' },
    { title: 'Run', artist: 'Joji' },
    { title: 'Breakin the habits', artist: 'Linking park' }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('libraryPage').style.display = 'block';
        loadMusicLibrary();
    } else {
        alert('Invalid credentials');
    }
}

function logout() {
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('libraryPage').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
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
