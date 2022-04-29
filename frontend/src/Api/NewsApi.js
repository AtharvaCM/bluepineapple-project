const NewsInfo=()=>{
    const url = "https://newsapi.org/v2/everything?apiKey=f11fc893e794425498c3a94098b9a8dc&q=sports";
    return fetch(url).then((response)=> response.json()).catch((error)=>console.log(error))
}

export default NewsInfo;
