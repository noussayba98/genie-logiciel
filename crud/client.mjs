import { accountService } from "./accountService.mjs";
accountService.addAccount("Doe", "John");
const account = accountService.addAccount("Martin", "Alice");
console.log("Liste des comptes :", accountService.getAccountList());
accountService.saveAccount(account.id, "Martin", "Alicia");