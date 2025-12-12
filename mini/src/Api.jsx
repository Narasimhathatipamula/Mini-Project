

const API_BASE = "http://localhost:4000"; 
// If deployed, replace with your backend URL

export const getVersions = async () => {
  const res = await fetch(`${API_BASE}/versions`);
  return res.json();
};

export const saveVersion = async (previousText, newText) => {
  const res = await fetch(`${API_BASE}/save-version`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ previousText, newText })
  });
  return res.json();
};


