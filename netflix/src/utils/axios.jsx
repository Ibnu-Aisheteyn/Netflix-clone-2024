import axios from "axios";
let instance = axios.create({
  baseUrl: "https://api.themoviedb.org/3",
});
export default instance;
