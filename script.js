document.getElementById('getPostBtn').addEventListener('click', function() {
    const postId = document.getElementById('postIdInput').value;
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const postResult = document.getElementById('postResult');
            postResult.innerHTML = '';  // Clear previous results
            if (data.id) {
                postResult.innerHTML = `
                    <div class="post-content p-3">
                        <h3 class="text-primary">${data.title}</h3>
                        <p>${data.body}</p>
                    </div>
                `;
                postResult.classList.add('bg-light', 'border', 'border-primary');
                postResult.classList.add('fade-in');
            } else {
                postResult.innerHTML = `<p class="text-danger">Publicación no encontrada</p>`;
                postResult.classList.remove('bg-light', 'border', 'border-primary');
                postResult.classList.add('fade-in');
            }
        })
        .catch(error => {
            console.error('Error fetching the post data:', error);
            const postResult = document.getElementById('postResult');
            postResult.innerHTML = `<p class="text-danger">Error al obtener la publicación</p>`;
            postResult.classList.remove('bg-light', 'border', 'border-primary');
            postResult.classList.add('fade-in');
        });
});
