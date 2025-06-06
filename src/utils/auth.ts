import { clientID } from "../configs/auth";
import { REDIRCT_URI } from "../configs/commonConfig";
import { AuthParamsType } from "../models/auth";
import { base64encode, generateRandomString, sha256 } from "./crypto";

export const getSpotifyLogin = async () => {
  const codeVerifier = generateRandomString(64);
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  const clientId = clientID;
  const redirectUri = REDIRCT_URI;

  const scope = "user-read-private user-read-email";
  const authUrl = new URL("https://accounts.spotify.com/authorize");

  // generated in the previous step
  window.localStorage.setItem("code_verifier", codeVerifier);

  if (clientId && redirectUri) {
    const params: AuthParamsType = {
      response_type: "code",
      client_id: clientId,
      scope,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
    };

    authUrl.search = new URLSearchParams(Object.entries(params)).toString();

    // console.log(authUrl.search);
    window.location.href = authUrl.toString(); // spotify login 주소 열림
  }
};

export const logout = () => {
  localStorage.removeItem("code_verifier");
  localStorage.removeItem("access_token");
  window.location.href = "/";
};
