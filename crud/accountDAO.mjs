import { ACCOUNT_LIST } from "./database.mjs";

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
    return ACCOUNT_LIST.find((account) => account.id === id);
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
    if (index !== -1) {
      ACCOUNT_LIST[index] = account;
      console.log("BDD :", ACCOUNT_LIST);
    }
  },
  retrieveAccount(id) {},
};
