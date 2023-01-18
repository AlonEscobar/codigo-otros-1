let baseEndpoint = 'https://api.github.com';
let usersEndpoint = `${baseEndpoint}/users`;
let $n = document.querySelector('#name');
let $b = document.querySelector('#blog');
let $l = document.querySelector('#location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  try {
    let response = await fetch(`${usersEndpoint}/${username}`);
    let data = await response.json();
    $n.textContent = data.name;
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch(err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);