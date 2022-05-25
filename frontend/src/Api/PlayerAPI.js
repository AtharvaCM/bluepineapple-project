
const PlayerAPI = async (teamID) => {
  try {
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
