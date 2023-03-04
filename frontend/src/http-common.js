import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/5kStats",
  headers: {
    "Content-type": "application/json",
  },
});
