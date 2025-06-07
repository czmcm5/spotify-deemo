import { UserProfile } from "../models/user";
import api from "./__baseAIP";

export const getCurrentUserProfile = async (): Promise<UserProfile> => {
  // console.log("api 실행");
  try {
    const res = await api.get("/me");

    return res.data;
  } catch (err) {
    throw new Error("프로필 얻기 실패");
  }
};
