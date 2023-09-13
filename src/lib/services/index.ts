//
import { initClient,tsRestFetchApi } from "@ts-rest/core";

//
import { backend } from "configs/default";

//
import { appContract } from "./contracts";

export const client = initClient(appContract, {
  baseUrl: backend.baseUrl,
  baseHeaders: {},
  api: async (args) => {
    const response = await tsRestFetchApi(args);

    return response;
  },
});
