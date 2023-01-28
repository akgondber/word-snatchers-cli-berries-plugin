import { test } from "uvu";
import * as assert from "uvu/assert";
import BerriesPlugin from "../index.js";

let berriesPlugin;

test.before.each(() => {
  berriesPlugin = new BerriesPlugin();
});

test("BerriesPlugin#build", () => {
  const items = berriesPlugin.build();

  items.map((item) =>
    assert.ok(item.definition.length > 5 && item.word.length > 2)
  );
});

test.run();
