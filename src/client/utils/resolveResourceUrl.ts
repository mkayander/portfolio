import config from "./config";

/**
 * @param path Relative path of the dynamic media/resource. Ex.: '/media/image.png'
 * @return Absolute url string to access given static file
 */
const resolveResourceUrl = (path: string) => (path[0] === "/" ? config.baseUrl + path : path);

export default resolveResourceUrl;
