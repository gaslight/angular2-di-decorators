import "reflect-metadata";
import "rxjs";

import { InjectParameters } from '../lib/index';

class Foo {}

@InjectParameters([Foo])
class Bar {
  constructor(foo) {}
}

describe('InjectParameters', () => {
  it("adds the inject metadata", () => {
    var paramMetadata = Reflect.getMetadata("parameters", Bar);
    assert(paramMetadata[0].token == Foo)
  });
});
