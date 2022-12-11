const API_BASE = "https://api.themoviedb.org/3";

const API_KEY = "cbf565d23951b77b82b907204b8f7383";

const loadAPI = async (path) => {
  const response = await fetch(`${API_BASE}${path}`);
  return await response.json();
};

const Api = {
  getDataApi: async () => {
    return [
      {
        name: "originals",
        title: "Originais Infinit+",
        loadAPI: await loadAPI(
          `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_networks=213`
        ),
      },
      {
        name: "trendig",
        title: "Recomendados para voce",
        loadAPI: await loadAPI(`/trending/movie/week?api_key=${API_KEY}`),
      },
      {
        name: "onHigh",
        title: "Em alta",
        loadAPI: await loadAPI(
          `/movie/popular?api_key=${API_KEY}&language=pt-BR`
        ),
      },
      {
        name: "action",
        title: "Ação",
        loadAPI: await loadAPI(
          `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=28`
        ),
      },
      {
        name: "comedy",
        title: "Comedia",
        loadAPI: await loadAPI(
          `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=35`
        ),
      },
      {
        name: "documentary",
        title: "Documentario",
        loadAPI: await loadAPI(
          `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=99`
        ),
      },
      {
        name: "adventure",
        title: "Aventura",
        loadAPI: await loadAPI(
          `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=12`
        ),
      },
      {
        name: "romance",
        title: "Romance",
        loadAPI: await loadAPI(
          `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=10749`
        ),
      },
      {
        name: "horror",
        title: "Terror",
        loadAPI: await loadAPI(
          `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=27`
        ),
      },
    ];
  },
  getDetails: async (id) => {
    return {
      loadAPI: await loadAPI(
        `/movie/${id}?api_key=cbf565d23951b77b82b907204b8f7383&language=pt-BR`
      ),
    };
  },
  getTrailler: async (id) => {
    return {
      loadAPI: await loadAPI(
        `/movie/${id}/videos?api_key=cbf565d23951b77b82b907204b8f7383&language=en-US`
      ),
    };
  },
  getSearch: async (query) => {
    return {
      loadAPI: await loadAPI(
        `/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`
      ),
    };
  },
};

export default Api;
