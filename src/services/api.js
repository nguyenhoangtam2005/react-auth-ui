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
