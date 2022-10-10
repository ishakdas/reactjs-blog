import http from "../http-common";
import PostFrontMatter from "../../types/PostFrontMatter";
const getAll =async  () => {
    return await  http.get<PostFrontMatter>("blog");
};

const BlogService = {
    getAll
}

export default BlogService;