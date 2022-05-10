// returns Cricket Team Info

const TeamInfoAPI = async (teamID) => {
  try {
    const url = `http://127.0.0.1:5000/api/v1/cricket/teams/${teamID}`;
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

export default TeamInfoAPI;