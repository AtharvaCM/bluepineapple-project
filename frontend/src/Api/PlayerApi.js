export const player =()=>{
    const url = 'https://api.cricapi.com/v1/players?apikey=50a551b3-0883-465a-a2b1-e10241452e7f&offset=0';

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log("ERROR: ", err));
}