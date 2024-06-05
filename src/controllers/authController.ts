import {
  CreateUserAccount,
  LoginUserAccount,
  account,
} from "@/models/userModel";
import { ID, OAuthProvider } from "appwrite";

export class AppwriteService {
  async createUserAccount({
    email,
    password,
    firstname,
    lastname,
  }: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        `${firstname} ${lastname}`
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error: any) {
      throw error;
    }
  }

  async login({ email, password }: LoginUserAccount) {
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error: any) {
      throw error;
    }
  }

  async loginWithGithub() {
    try {
      account.createOAuth2Session(
        OAuthProvider.Github,
        "https://xerocodee-lilac.vercel.app/",
        "https://xerocodee-lilac.vercel.app/fail"
      )
    } catch (error: any) {
      throw error;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {}

    return false;
  }

  async getCurrentUser() {
    try {
      return account.get();
    } catch (error) {
      console.log("getcurrentUser error: " + error);
    }

    return null;
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("logout error: " + error);
    }
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
