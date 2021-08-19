/**
 * Equals to true if server is running in production mode.
 */
const isProd: boolean = process.env.NODE_ENV === "production";

export default isProd;
