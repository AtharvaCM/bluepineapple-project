const NewsInfo = async () => {
     const url =
   "https://newsapi.org/v2/everything?apiKey=f11fc893e794425498c3a94098b9a8dc&q=sports";
  //const url = "127.0.0.1:5000/api/v1/cricket/news";
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

// const NewsInfo = async () => {
//   try {
//     const url = "http://127.0.0.1:5000/api/v1/cricket/news";
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {},
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const res = await response.json();
//     return res;
//   } catch (err) {
//     console.log(`{ error: ${err.message || err.toString()} }`);
//   }
// };

export default NewsInfo;
