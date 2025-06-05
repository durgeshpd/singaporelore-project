const userTickets = {
  'user_123': 5,
};

exports.handler = async (event) => {
  const userId = event.queryStringParameters.userId || 'guest';
  const tickets = userTickets[userId] || 0;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ tickets }),
  };
};