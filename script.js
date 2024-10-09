const users = [
    { username: 'jão', password: '1234' },
    { username: 'user2', password: 'password2' }
];

const musicLibrary = [
    { title: 'Sound of Silence', artist: 'Unknown' },
    { title: 'Run', artist: 'Joji' },
    { title: 'Breaking the Habit', artist: 'Linkin Park' }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = 'pulse.html'; // Redireciona para a página pulse.html
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

function cadastrar() {
    window.location.href = 'cadastro.html'; // Redireciona para a página de cadastro
}

function entrarLogin() {
    window.location.href = 'index.html'; // Redireciona para a página de login
}