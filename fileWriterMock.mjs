export class FileWriterMock {
  constructor() {
    this.content = "";
  }

  write(fileName, content) {
    this.content += content;
  }
}