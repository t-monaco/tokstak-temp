import { Hono } from "hono";
import { mockResponse } from "../mockData";

const videos = new Hono();

videos.get("/", async (c) => {
  // Here will go the request to tiktok's api.
  // Need for approval in order to use TikTok API.

  //   const apiUrl =
  //     "https://open.tiktokapis.com/v2/video/list/?fields=cover_image_url,id,title";
  //   const accessToken = await fetchTikTokToken();
  //
  //   const requestData = {
  //     max_count: 20,
  //   };
  //
  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(requestData),
  //     });
  //
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //
  //     const data = await response.json();
  //
  //     return c.json(data);
  //   } catch (error) {
  //     return c.json({ error });
  //   }

  return c.json(mockResponse);
});

export default videos;
