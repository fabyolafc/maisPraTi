// Swiper para imagens
var swiperImages = new Swiper(".swiper-images", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});

// Swiper para texto
var swiperText = new Swiper(".swiper-text", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
  controller: {
    control: swiperImages, // Sincroniza com o swiper de imagens
  }
});

// Sincroniza o swiper de imagens com o de texto
swiperImages.controller.control = swiperText;


// 70bd816f81a45de06dc6453a7c8a1ab3

let scrollAmountFilmes = 0;
let scrollAmountSeries = 0;
let scrollPerClick = 100;
const imagePadding = 20;

function sliderScrollLeft(type) {
  let sliders;
  let scrollAmount;

  if (type === 'filmes') {
    sliders = document.querySelector("#carrossel-filmes .carrosselBox");
    scrollAmount = scrollAmountFilmes;
  } else {
    sliders = document.querySelector("#carrossel-series .carrosselBox");
    scrollAmount = scrollAmountSeries;
  }

  scrollAmount = Math.max(0, scrollAmount - scrollPerClick);
  
  sliders.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: "smooth",
  });

  // Atualiza a variável correta
  if (type === 'filmes') {
    scrollAmountFilmes = scrollAmount;
  } else {
    scrollAmountSeries = scrollAmount;
  }
}

function sliderScrollRight(type) {
  let sliders;
  let scrollAmount;

  if (type === 'filmes') {
    sliders = document.querySelector("#carrossel-filmes .carrosselBox");
    scrollAmount = scrollAmountFilmes;
  } else {
    sliders = document.querySelector("#carrossel-series .carrosselBox");
    scrollAmount = scrollAmountSeries;
  }

  const maxScrollLeft = sliders.scrollWidth - sliders.clientWidth;

  if (scrollAmount < maxScrollLeft) {
    scrollAmount = Math.min(maxScrollLeft, scrollAmount + scrollPerClick);

    sliders.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  // Atualiza a variável correta
  if (type === 'filmes') {
    scrollAmountFilmes = scrollAmount;
  } else {
    scrollAmountSeries = scrollAmount;
  }
}


async function showMoviesAndSeries() {

  const moviesContainer = document.querySelector(".section_filmes .carrosselBox");
  const seriesContainer = document.querySelector(".section_series .carrosselBox");

  const apiKey = "70bd816f81a45de06dc6453a7c8a1ab3";

  try {
    // Endpoint para buscar filmes populares
    const moviesResponse = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);

    // Endpoint para buscar séries populares
    const seriesResponse = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`);

    const movies = moviesResponse.data.results;
    const series = seriesResponse.data.results;

    // Exibe filmes no contêiner de filmes
    movies.forEach((movie, index) => {
      moviesContainer.insertAdjacentHTML(
        "beforeend",
        `<img class="img-movie-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${movie.poster_path}" alt="${movie.title}" />`
      );
    });

    // Exibe séries no contêiner de séries
    series.forEach((tvShow, index) => {
      seriesContainer.insertAdjacentHTML(
        "beforeend",
        `<img class="img-series-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${tvShow.poster_path}" alt="${tvShow.name}" />`
      );
    });

    // Ajuste da rolagem de acordo com a largura da primeira imagem
    const firstImage = document.querySelector(".img-movie-0") || document.querySelector(".img-series-0");
    if (firstImage) {
      scrollPerClick = firstImage.offsetWidth + imagePadding;
    }

  } catch (error) {
    console.error("Erro ao buscar filmes ou séries", error);
  }
}

showMoviesAndSeries();









// const sliders = document.querySelector(".carrosselBox")
// let scrollAmount = 0;
// let scrollPerClick = 100;
// const imagePadding = 20;

// function sliderScrollLeft() {
//   scrollAmount = Math.max(0, scrollAmount - scrollPerClick);
//   sliders.scrollTo({
//     top: 0,
//     left: scrollAmount,
//     behavior: "smooth",
//   });
// }

// function sliderScrollRight() {
//   const maxScrollLeft = sliders.scrollWidth - sliders.clientWidth;
//   if (scrollAmount < maxScrollLeft) {
//     scrollAmount = Math.min(maxScrollLeft, scrollAmount + scrollPerClick);

//     sliders.scrollTo({
//       top: 0,
//       left: scrollAmount,
//       behavior: "smooth",
//     });
//   }
// }

// async function showMovies() {
//   const apiKey = "70bd816f81a45de06dc6453a7c8a1ab3";

//   try {

//     const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`);

//     const movies = response.data.results;

//     movies.forEach((movie, index) => {
//       sliders.insertAdjacentHTML(
//         "beforeend",  // Correção do typo
//         `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${movie.poster_path}" />`
//       );
//     });

//     const firstImage = document.querySelector(".img-0");
//     if (firstImage) {
//       scrollPerClick = firstImage.offsetWidth + imagePadding;  // Pegando a largura da imagem corretamente
//     }

//   } catch (error) {
//     console.error("Erro ao buscar filmes", error);
//   }
// }

// showMovies();
