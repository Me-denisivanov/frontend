import { AboutUserType } from "./../redux/slices/auth"
import axios from "axios"
import { httpService } from "./http.service"
import localStorageService from "./localStorage.service"

type LogInType = Record<string, string>

const httpAuth = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const authService = {
  register: async ({ email, password, fullName, avatarUrl }: AboutUserType) => {
    const { data } = await httpAuth.post(`signUp`, {
      email,
      fullName,
      password,
      avatarUrl,
      returnSecureToken: true,
    })
    return data
  },
  logIn: async ({ email, password }: LogInType) => {
    const { data } = await httpAuth.post(`signInWithPassword`, {
      email,
      password,
      returnSecureToken: true,
    })
    return data
  },
  refresh: async () => {
    const { data } = await httpAuth.post("token", {
      grant_type: "refresh_token",
      refresh_token: localStorageService.getRefreshToken(),
    })
    return data
  },
  userMe: async () => {
    const { data } = await httpService.get("user")
    return data
    //<AllInfoUser>
  },
}

export default authService
