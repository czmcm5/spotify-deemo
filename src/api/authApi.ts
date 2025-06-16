import axios from "axios";
import { clientID, secretKey } from "../configs/auth";
import { AccessTokenRes, SpoAccessTokenRes } from "../models/auth";
import { REDIRCT_URI } from "../configs/commonConfig";

const encodeBase64 = (data: string) => {
  if (typeof window !== "undefined") return btoa(data);
  return Buffer.from(data).toString("base64");
};

/** client access token - 로그인 토큰과 별개. */
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

export const exchangeToken = async (
  code: string,
  codeVerifier: string
): Promise<AccessTokenRes> => {
  try {
    const url = "https://accounts.spotify.com/api/token";

    if (!clientID || !REDIRCT_URI) {
      throw new Error("파라미터 미싱");
    }

    const body = new URLSearchParams({
      client_id: clientID,
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRCT_URI,
      code_verifier: codeVerifier,
    });

    const res = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    // console.log(res.data);
    return res.data;
  } catch (err) {
    throw new Error("Fail to fetch token");
  }
};
