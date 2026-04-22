exports.handler = async (event) => {
  const { title } = JSON.parse(event.body);
  const res = await fetch(`https://video.bunnycdn.com/library/642514/videos`, {
    method: 'POST',
    headers: {
      'AccessKey': 'f6ce9483-0226-413f-8473-cf9dd9ab-7ef9-48da',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  });
  const data = await res.json();
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };
};
