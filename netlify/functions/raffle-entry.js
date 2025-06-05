const userTickets = {
  'user_123': 5,
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { userId } = JSON.parse(event.body);

  if (!userId) {
    return { statusCode: 400, body: 'User ID is required.' };
  }

  userTickets[userId] = (userTickets[userId] || 0) + 1;
  const newCount = userTickets[userId];

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ success: true, tickets: newCount }),
  };
};