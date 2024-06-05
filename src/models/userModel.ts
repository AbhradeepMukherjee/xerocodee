import conf from "@/config/config";
import { Client, Account, ID } from "appwrite";

export type CreateUserAccount = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

export type LoginUserAccount = {
  email: string;
  password: string;
};

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);
