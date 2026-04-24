// Central place for API helpers.
// Example using fetch; swap to axios if preferred.

const API_BASE_URL = process.env.REACT_APP_API_URL || '';

export const login = async (payload) => {
  const res = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error('Login failed');
  return res.json();
};


// URL của API
const apiUrl = 'https://learn.microsoft.com/en-us/graph/api/domain-list?view=graph-rest-1.0&tabs=http';

// Ví dụ 1: GET request (mặc định)
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // hoặc .text() nếu response không phải JSON
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Ví dụ 2: POST request (có body JSON)
const postData = {
  key: 'value', // thay bằng dữ liệu thực tế API yêu cầu
};

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // Thêm headers khác nếu cần (ví dụ: Authorization)
  },
  body: JSON.stringify(postData),
})
  .then(response => response.json())
  .then(data => console.log('POST success:', data))
  .catch(error => console.error('POST error:', error));