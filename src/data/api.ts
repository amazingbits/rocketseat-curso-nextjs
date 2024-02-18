import { env } from "@/env";

export async function api(
  path: string,
  init?: RequestInit,
  apiPrefix: string = "/api",
) {
  const baseURL = env.NEXT_PUBLIC_API_BASE_URL;
  const url = new URL(apiPrefix.concat(path), baseURL);
  return await fetch(url, init);
}
