import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 7-HEmRp-nlTnSdrtfBiD3UvCB7QhYyp1b7s_OPgAt70",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
export default searchImages;
