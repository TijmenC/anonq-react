import http from "../common-api";

const PostComment = (data) => {
    return http.httpdefault().post("/Comment", data);
  };
  

export default {
  PostComment
};
