import { accountService } from "./accountService.mjs";
accountService.addAccount("Doe", "John");
console.log("Liste des comptes :", accountService.getAccountList());