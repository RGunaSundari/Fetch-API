const userContainer = document.getElementById('userContainer');
const errorMsg = document.getElementById('errorMsg');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUserData() {
  userContainer.innerHTML = '';
  errorMsg.textContent = '';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(userDiv);
      });
    })
    .catch(error => {
      errorMsg.textContent = 'Failed to fetch user data. Please check your connection.';
      console.error('Fetch error:', error);
    });
}

reloadBtn.addEventListener('click', fetchUserData);

// Initial fetch
fetchUserData();
