import { test } from "node:test";
import assert from "node:assert";
import { parse } from "./robotParser.js";

test("0X123 devient moveForward", function () {
    assert.deepEqual(parse("0X123"), ["moveForward"]);
});

test("0X789 devient moveBackward", function () {
    assert.deepEqual(parse("0X789"), ["moveBackward"]);
});

test("0XABC devient stop", function () {
    assert.deepEqual(parse("0XABC"), ["stop"]);
});

test("plusieurs commandes", function () {
   assert.deepEqual(parse("0X123 0X789 0XABC"),
        ["moveForward", "moveBackward", "stop"]);
        });
