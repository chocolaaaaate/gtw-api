///</// <reference path="angularhangman.js" />

QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", "Passed!");
});


QUnit.test("test replace - single occurrence", function (assert) {
    assert.equal(updateGuessState("_ _ _ ", "cat", "a"), "_ a _ ", "mid");
    assert.equal(updateGuessState("_ _ _ ", "cat", "c"), "c _ _ ", "start");
    assert.equal(updateGuessState("_ _ _ ", "cat", "t"), "_ _ t ", "end");
});

QUnit.test("test replace - single occurrence - case handling", function (assert) {
    assert.equal(updateGuessState("_ _ _ ", "cat", "A"), "_ a _ ", "mid");
    assert.equal(updateGuessState("_ _ _ ", "cat", "C"), "c _ _ ", "start");
    assert.equal(updateGuessState("_ _ _ ", "cat", "T"), "_ _ t ", "end");

    assert.equal(updateGuessState("_ _ _ ", "CAT", "a"), "_ A _ ", "mid");
    assert.equal(updateGuessState("_ _ _ ", "CAT", "c"), "C _ _ ", "start");
    assert.equal(updateGuessState("_ _ _ ", "CAT", "t"), "_ _ T ", "end");
});

QUnit.test("test replace - multiple (two) occurrences", function (assert) {
    assert.equal(updateGuessState("_ _ _ _ _ _ _ _ ", "starwars", "a"), "_ _ a _ _ a _ _ ", "");
    assert.equal(updateGuessState("_ _ a _ _ a _ _ ", "starwars", "r"), "_ _ a r _ a r _ ", "");
    assert.equal(updateGuessState("_ _ a r _ a r _ ", "starwars", "s"), "s _ a r _ a r s ", "");
});

QUnit.test("test replace - multiple (n) occurrences", function (assert) {
    assert.equal(updateGuessState("_ _ _ _ _ _ _ _ ", "ssssssss", "s"), "s s s s s s s s ", "");
});

QUnit.test("test replace - nil occurrence", function (assert) {
    assert.equal(updateGuessState("_ _ _ ", "cat", "q"), "_ _ _ ", "");
});

