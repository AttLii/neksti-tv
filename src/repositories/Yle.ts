import { Teletext } from "@/types/Yle.types";

export const YleApiClient = (appId: string, appKey: string) => {
  const urlParams = new URLSearchParams([
    ["app_id", appId],
    ["app_key", appKey],
  ]);
  return {
    getV1TeletextPage: (page: string): Promise<Teletext> =>
      fetch(
        `https://external.api.yle.fi/v1/teletext/pages/${page}.json?${urlParams.toString()}`
      ).then((r) => r.json()),
  };
};
