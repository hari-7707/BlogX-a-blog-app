import config from "../config/config.js";

import { Client, Account, ID } from "appwrite";

class AuthenService {
  client;
  account;
  constructor() {
    this.client = new Client()
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }
  async createAccount({ email, name, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout07 :: error", error);
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser07 :: error", error);
    }
  }
}
const authenService = new AuthenService();
export default authenService;
