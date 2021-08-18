import config from "./config";

/**
 * @param relativePath Relative path of the dynamic media/resource. Ex.: '/media/image.png'
 * @return Absolute url string to access given static file
 */
const resolveResourceUrl = (relativePath: string) => config.baseUrl + relativePath;

export default resolveResourceUrl;
