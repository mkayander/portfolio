import isProd from "./isProd";
import * as dotenv from "dotenv";

dotenv.config();

const hostname: string | undefined = isProd ? process.env.SERVER_PROD_HOSTNAME : "localhost";
const port: string | undefined = isProd ? process.env.SERVER_PROD_PORT : "3000";
const protocol = "http";
const baseUrl = `${protocol}://${hostname}${port && `:${port}`}`;

export default { hostname, port, protocol, baseUrl } as const;
