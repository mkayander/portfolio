import isProd from "./isProd";

const hostname: string | undefined = isProd ? process.env.NEXT_PUBLIC_HOSTNAME : "localhost";
const port: string | undefined = isProd ? process.env.NEXT_PUBLIC_PORT : "3000";
const protocol = "http";
const baseUrl = `${protocol}://${hostname}${port && `:${port}`}`;

export default { hostname, port, protocol, baseUrl } as const;
