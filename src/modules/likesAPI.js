// import fetchFromApi from './fromApi.js';

//  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
// const appId = 'XbvsaAE4Kq5sfF9VGiHS';
// const uniUrl = `${url}${appId}/likes/`;

// const postLikes = async () => {
//     const res = await fetch(url, {
//       method: 'POST',
//       headers: { 'content-type': 'application/json' },
//       body: JSON.stringify({  "item_id": "item1"}),
//     });
//     const data = await res.text();
//     console.log (data);
//   }
//   postLikes();


// const likeIt = async () => {
//   const allMovies = await fetchFromApi();
//   const likes = document.querySelectorAll('.likes');
//   const likeCount = document.querySelectorAll('.likeCount');
//   likes.forEach((element, index) => {
//     let inner = JSON.parse(likeCount[index].innerHTML);

//     element.addEventListener('click', () => {
//       postLike(allMovies[index].name);
//       inner += 1;
//       likeCount[index].innerHTML = inner;
//     });
//   });
// };
