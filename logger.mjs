import { FileWriter } from "./fileWriter.mjs";

class Logger {
  constructor(writer) {
    this.writer = writer;
  }

  setWriter(writer) {
    this.writer = writer;
  }

  info(message) {
    this.writer.write("log.txt", `${message}\n`);
  }
}

export const logger = new Logger(new FileWriter());