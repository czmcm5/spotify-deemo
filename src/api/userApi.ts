import { UserProfile } from "../models/user";
import { logout } from "../utils/auth";
import api from "./__baseAIP";

export const getCurrentUserProfile = async (): Promise<UserProfile> => {
  try {
    const res = await api.get("/me");
    return res.data;
  } catch (err) {
    logout();
    throw new Error("프로필 얻기 실패");
  }
};
