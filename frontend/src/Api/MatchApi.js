const matchInfo=() =>{
    //const url = "https://api.cricapi.com/v1/matches?apikey=50a551b3-0883-465a-a2b1-e10241452e7f";
    const url = "https://api.cricapi.com/v1/currentMatches?apikey=50a551b3-0883-465a-a2b1-e10241452e7f";
    return fetch(url).then((response) => response.json()).catch((error) => console.log(error))
}




export default matchInfo;
