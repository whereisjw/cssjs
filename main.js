const getGenreMovie = (장르번호) => {
  return new Promise(async (resolve) => {
    let result = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=a17fc435835739879e88d78b9c75c21d&include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc&with_genres=${장르번호}`
    );
    let data = await result.json();
    console.log(data);
    resolve(data);
  });
};
let arr = [];
document.querySelectorAll(".test button").forEach((v, i) => {
  v.addEventListener("click", (e) => {
    if (arr.includes(e.currentTarget.value)) {
      let idx = arr.indexOf(e.currentTarget.value);
    } else {
      arr.push(e.currentTarget.value);
    }

    console.log(arr, arr.indexOf("35"));
    getGenreMovie(e.currentTarget.value);
  });
});
