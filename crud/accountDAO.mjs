import { ACCOUNT_LIST } from "./database.mjs";
import { Account } from "./account.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("BDD :", ACCOUNT_LIST);
  },
    retrieveAccountList() {
    return ACCOUNT_LIST.map((account) => ({
      id: account.id,
      lastName: account.lastName,
      firstName: account.firstName,
    }));
  },
  findAccount(id) {
    const found = ACCOUNT_LIST.find((account) => account.id === id);
    return new Account(found.id, found.lastName, found.firstName, found.creationDate);
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
    if (index !== -1) {
      ACCOUNT_LIST[index] = account;
      console.log("BDD :", ACCOUNT_LIST);
    }
  },
  retrieveAccount(id) {
    const account = this.findAccount(id);
    if (account) {
      return {
        id: account.id,
        name: account.lastName + " " + account.firstName,
        creationDate: account.creationDate,
      };
    }
    return null;
  },
};
