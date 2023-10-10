import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get("/posts", {
      params: { _limit: limit, _page: page },
    });
    return response;
  }

  static async getById(id) {
    const response = await axios.get(`/posts/${id}`);
    return response;
  }
  static async getCommentsByPostById(id) {
    const response = await axios.get(`/posts/${id}/comments`);
    return response;
  }
}
