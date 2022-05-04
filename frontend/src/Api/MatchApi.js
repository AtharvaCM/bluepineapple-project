// const matchInfo = async () => {
//   //const url = "https://api.cricapi.com/v1/matches?apikey=50a551b3-0883-465a-a2b1-e10241452e7f";
//   const url =
//     "https://api.cricapi.com/v1/currentMatches?apikey=50a551b3-0883-465a-a2b1-e10241452e7f";
//   return fetch(url)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// };

const MatchInfo = async () => {
  try {
    const url = "http://127.0.0.1:5000/api/v1/cricket/currentMatches";
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
export default MatchInfo;
