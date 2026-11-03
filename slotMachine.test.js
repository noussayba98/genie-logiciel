import { test } from "node:test";
import assert from "node:assert";
import { slotMachine } from "./slotMachine.js";

test("double la mise si les 2 premiers symboles sont identiques", function () {
    assert.equal(slotMachine(5, ["+", "+", "%"]), 10);
});

test("double la mise si les 2 derniers symboles sont identiques", function () {
    assert.equal(slotMachine(5, ["%", "+", "+"]), 10);
});

test("mise x5 si les 3 symboles sont identiques", function () {
    assert.equal(slotMachine(10, ['+', '+', '+']), 50);
});
test("mise x20 si les 3 symboles sont le symbole Jackpot", function () {
    assert.equal(slotMachine(50, ['$', '$', '$']), 1000);
});