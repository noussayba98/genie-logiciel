import { Account } from "./account.mjs";
import { accountDAO } from "./accountDAO.mjs";
export const accountService = {
  addAccount(lastName, firstName) {
    const account = new Account(undefined, lastName, firstName);
    accountDAO.insertAccount(account);
    return account;
  },
  getAccountList() {
    return accountDAO.retrieveAccountList();
  },
  saveAccount(id, lastName, firstName) {
    const account = accountDAO.findAccount(id);
    account.lastName = lastName;
    account.firstName = firstName;
    accountDAO.updateAccount(account);
    return account;
  },
  getAccount(id) {
    return accountDAO.retrieveAccount(id);
  },
};
