// export const player = () => {
//   const url =
//     "https://api.cricapi.com/v1/players?apikey=50a551b3-0883-465a-a2b1-e10241452e7f&offset=0";

//   return fetch(url)
//     .then((res) => res.json())
//     .catch((err) => console.log("ERROR: ", err));
// };

const PlayerAPI = async (teamID) => {
  try {
    console.log("teamID", teamID);
    const url =
      teamID === null || teamID === undefined
        ? "http://127.0.0.1:5000/api/v1/cricket/players/"
        : `http://127.0.0.1:5000/api/v1/cricket/${teamID}/players/`;
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

export default PlayerAPI;
