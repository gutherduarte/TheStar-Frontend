  export async function login(body = {}) {
    const baseUrl = `http://localhost:3001/api/login`;
    const response = await fetch(baseUrl, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
    });
    return response.json();
  }