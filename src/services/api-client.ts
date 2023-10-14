import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "71e0f5e23d3a4a149cf01210dca9e06c",
  },
});
