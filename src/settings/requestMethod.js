import axios from "axios";

const restApiProtocol = axios.creeate({
  baseURL: "http://localhost:3001/api",
});

export default restApiProtocol;
