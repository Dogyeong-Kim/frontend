// 년, 월, 일 가져오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

const init = () => {
  // 어제 날짜 구하기
  const today = new Date();
  console.log(today);

  // 년, 월, 일 분리 => 요소 안에 보여주기
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 월 : 0부터 시작
  const day = today.getDate() - 1; // 어제

  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};

init();

document.querySelector("button").addEventListener("click", () => {
  // 사용자가 입력한 년, 월, 일 가져오기
  const targetDt = txtYear.value + selMon.value + selDay.value;
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?id=1&key=0cc4eb80a1130a9cb1baa78b7dfb7506&targetDt=${targetDt}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.boxOfficeResult);
      console.log(data.boxOfficeResult.dailyBoxOfficeList);

      const boxList = data.boxOfficeResult.dailyBoxOfficeList;

      let tags = "";
      boxList.forEach((movie) => {
        // 순위  영화명
        // rank, rankInten, movieNm
        // (▲1)   승부
        const rank = movie.rank;
        const rankInten = movie.rankInten;
        const name = movie.movieNm;

        if (rankInten > 0) {
          tags += `${rank}위(▲${rankInten} )`;
        } else if (rankInten < 0) {
          tags += `${rank}위(▼${rankInten} )`;
        } else {
          tags += `${rank}위(-${rankInten} )`;
        }
        tags += `<a href='#' onclick='javascript:movieInfo(${movie.movieCd})'>${name}</a>`;
        tags += `<br>`;
      });
      document.querySelector("#rank").innerHTML = tags;
    });
});

// 영화상세정보
const movieInfo = (movieCd) => {
  console.log(movieCd);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=0cc4eb80a1130a9cb1baa78b7dfb7506&movieCd=${movieCd}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.movieInfoResult.movieInfo);
      // 영화제목 movieNm
      // 영어제목 movieNmEn
      // 상영시간 showTm
      // 감독 directors.peopleNm
      // 배우 actors.peopleNm
      const mInfo = data.movieInfoResult.movieInfo;

      let tags = "<ul>";
      tags += `<li>영화제목 : ${mInfo.movieNm}</li> `;
      tags += `<li>영어제목 : ${mInfo.movieNmEn}</li> `;
      tags += `<li>상영시간 : ${mInfo.showTm}분</li> `;

      let directorNm = "";
      mInfo.directors.forEach((item) => {
        directorNm += item.peopleNm + ", ";
      });
      tags += `<li>감독 : ${directorNm}</li>`;

      let actorNm = "";
      mInfo.actors.forEach((item) => {
        actorNm += item.peopleNm + ", ";
      });
      tags += `<li>배우 : ${actorNm}</li>`;

      tags += `<br>`;
      document.querySelector("#info").innerHTML = tags;
    });
};
