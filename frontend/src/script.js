document.getElementById('ticketForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const ticket = {
    userName: document.getElementById('userName').value,
    serviceProvider: document.getElementById('serviceProvider').value,
    zone: document.getElementById('zone').value,
    price: document.getElementById('price').value,
    payment: document.getElementById('payment').value,
    contact: document.getElementById('contact').value
  };

  const response = await fetch('http://localhost:3000/api/tickets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ticket)
  });
  const result = await response.json();
  console.log(result);
});

async function fetchTickets() {
  const response = await fetch('http://localhost:3000/api/tickets?serviceProvider=Provider1');
  const tickets = await response.json();
  document.getElementById('tickets').innerText = JSON.stringify(tickets);
}

async function searchTickets() {
  const provider = document.getElementById('searchProvider').value;
  const response = await fetch(`http://localhost:8080/api/tickets?serviceProvider=${provider}`);
  const tickets = await response.json();
  document.getElementById('searchResults').innerText = JSON.stringify(tickets);
}

fetchTickets();
