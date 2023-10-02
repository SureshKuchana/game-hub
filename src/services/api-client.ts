import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a630e8a8a4934987a7a427f0e0547769",
  },
});
