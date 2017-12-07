export const login = (email, password) => { // eslint-disable-line
  const request = new Request('http://localhost:3001/authenticate.json', {
    method: 'POST',
    body: JSON.stringify({email: email, password: password}),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
  return fetch(request);
};

export const getTickets = (token) => { // eslint-disable-line
  const request = new Request('http://localhost:3001/tickets.json', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  });
  return fetch(request);
};

export const getTicket = (token, ticketId) => { // eslint-disable-line
  const request = new Request(`http://localhost:3001/tickets/${ticketId}.json`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  });
  return fetch(request);
};

export const changeTicket = (token, ticketId) => { // eslint-disable-line
  const ticketBody = {
    ticket: {

    }
  };
  const request = new Request(`http://localhost:3001/tickets/${ticketId}.json`, {
    method: 'PUT',
    body: ticketBody,
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  });
  return fetch(request);
};

export const logout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
};
