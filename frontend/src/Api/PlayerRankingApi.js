export const CricRankTestApi = async () => {
  try {
    const url = `https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/players/batting/ranking/test`;
    const response = await fetch(url, {
      method: "GET",
      headers: {},
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(`{ error: ${err.message || err.toString()} }`);
  }
};

export const CricRankT20Api = async () => {
  try {
    const url = `https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/players/batting/ranking/t20`;
    const response = await fetch(url, {
      method: "GET",
      headers: {},
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(`{ error: ${err.message || err.toString()} }`);
  }
};

export const CricRankOdiApi = async () => {
  try {
    const url = `https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/players/batting/ranking/odi`;
    const response = await fetch(url, {
      method: "GET",
      headers: {},
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(`{ error: ${err.message || err.toString()} }`);
  }
};

export const CricRankBowlingkOdiApi = async () => {
  try {
    const url = `https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/players/bowling/ranking/odi`;
    const response = await fetch(url, {
      method: "GET",
      headers: {},
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(`{ error: ${err.message || err.toString()} }`);
  }
};

export const CricRankBowlingkTestApi = async () => {
  try {
    const url = `https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/players/bowling/ranking/test`;
    const response = await fetch(url, {
      method: "GET",
      headers: {},
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(`{ error: ${err.message || err.toString()} }`);
  }
};

export const CricRankBowlingkT20Api = async () => {
  try {
    const url = `https://sports-live-bluepineapple.herokuapp.com/api/v1/cricket/players/bowling/ranking/t20`;
    const response = await fetch(url, {
      method: "GET",
      headers: {},
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(`{ error: ${err.message || err.toString()} }`);
  }
};
