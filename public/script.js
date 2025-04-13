fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.row.mb-4.justify-content-center');

    data.cards.forEach(item => {
      console.log(item); // ✅ Check what is inside item

      const card = `
        <div class="col-md-3 mb-3">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">${item.status}</h5>
              <p class="card-text">${item.number}</p>
            </div>
          </div>
        </div>`;
      container.innerHTML += card;
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
