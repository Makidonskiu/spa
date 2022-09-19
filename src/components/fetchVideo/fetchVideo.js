import axios from 'axios'

export const fetchVideo = async (valueInput, setVideo, number = 25) => {
  try {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBY7A0lkSJve_WSCJFkEoveBfcM0EQyAZY&maxResults=${number}&q=${valueInput}`,
    );
    setVideo(res.data.items);
  } catch (err) {
    console.log(err.message);
  }
}
