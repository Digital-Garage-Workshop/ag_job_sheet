//
import { initClient } from "@ts-rest/core";

//
import { backend } from "configs/default";

//
import { appContract } from "./contracts";

export const client = initClient(appContract, {
  baseUrl: backend.baseUrl,
  baseHeaders: {},
  api: async ({ path, method, headers, body }) => {
    const response = await fetch(path, {
      method,
      body,
      headers,
    });

    return {
      status: response.status,
      body: response.ok ? await response.json() : await response.text(),
    };
  },
});
