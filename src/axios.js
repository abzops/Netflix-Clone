import axios from "axios"; 
import {baseUrl,youtubeUrl} from "./constants/constants";


const instance = axios.create({
    baseURL: baseUrl,
    youtubeUrl : youtubeUrl,
  });

  export default instance