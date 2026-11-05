import * as fs from "fs";

export class FileWriter {
  write(fileName, content) {
    fs.appendFileSync(fileName, content);
  }
}