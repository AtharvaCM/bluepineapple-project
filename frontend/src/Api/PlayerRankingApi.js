export const CricRankTestApi = async () => {
    try {
      const url = `http://127.0.0.1:5000/api/v1/cricket/players/batting/ranking/test`;
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
      const url = `http://127.0.0.1:5000/api/v1/cricket/players/batting/ranking/t20`;
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
      const url = `http://127.0.0.1:5000/api/v1/cricket/players/batting/ranking/odi`;
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