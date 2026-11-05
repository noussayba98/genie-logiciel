
import { logger } from "./logger.mjs";
import { FileWriterMock } from "./fileWriterMock.mjs";
import { test } from "node:test";
import assert from "node:assert";


test("test log info", function () {
    logger.setWriter(new FileWriterMock());
    logger.info("Message à caractère informatif");
});
