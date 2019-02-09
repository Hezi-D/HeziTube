import axios from "axios";

const KEY = "AIzaSyBK4OQ6H6nLAtTlRZIwXakn-twKSbDJ--c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
