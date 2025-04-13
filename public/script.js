async function loadCards() {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    console.log('Loaded data:', data);

    const container = document.querySelector('.row.mb-4.justify-content-center');

    data.cards.forEach(item => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-md-3 mb-3';

      const cardDiv = document.createElement('div');
      cardDiv.className = 'card text-center';
      cardDiv.style.transition = 'all 0.3s ease'; 
      cardDiv.style.border = '2px solid transparent'; 

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      const cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.textContent = item.status;
      cardTitle.style.transition = 'color 0.3s ease'; 

      const cardText = document.createElement('h3');
      cardText.className = 'card-text';
      cardText.textContent = item.number;
      cardText.style.transition = 'color 0.3s ease'; 

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardDiv.appendChild(cardBody);
      colDiv.appendChild(cardDiv);
      container.appendChild(colDiv);

      cardDiv.addEventListener('mouseenter', () => {
        cardDiv.style.border = '2px solid #0d6efd'; 
        cardTitle.style.color = '#0d6efd'; 
        cardText.style.color = '#0d6efd'; 
      });

      cardDiv.addEventListener('mouseleave', () => {
        cardDiv.style.border = '2px solid transparent'; 
        cardTitle.style.color = '';
        cardText.style.color = ''; 
      });
    });
  } catch (error) {
    console.error('Error loading cards:', error);
  }
}

loadCards();
