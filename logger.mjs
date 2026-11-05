import { FileWriter } from "./fileWriter.mjs";

class Logger {
  constructor(writer) {
    this.writer = writer;
  }

  setWriter(writer) {
    this.writer = writer;
  }

    info(message) {
    const timestamp = new Date().toISOString();
    this.writer.write("log.txt", `${timestamp} : ${message}\n`);
  }
}

export const logger = new Logger(new FileWriter());