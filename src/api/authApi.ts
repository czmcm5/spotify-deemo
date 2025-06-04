import axios from "axios";
import { clientID, secretKey } from "../configs/auth";
import { SpoAccessTokenRes } from "../models/auth";

const encodeBase64 = (data: string) => {
  if (typeof window !== "undefined") return btoa(data);
  return Buffer.from(data).toString("base64");
};

export const getSpotifyToken = async (): Promise<SpoAccessTokenRes> => {
  try {
    const body = new URLSearchParams({
      grant_type: "client_credentials",
    });

    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      body,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${encodeBase64(`${clientID}:${secretKey}`)}`,
        },
      }
    );
    return res.data;
  } catch (err) {
    throw new Error("Fail to fetch token");
  }
};
