// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.3.7
description: >
  Returns false if searchString is not found with a given position.
info: >
  21.1.3.7 String.prototype.includes ( searchString [ , position ] )

  ...
  11. Let len be the number of elements in S.
  12. Let start be min(max(pos, 0), len).
  13. Let searchLen be the number of elements in searchStr.
  14. If there exists any integer k not smaller than start such that k +
  searchLen is not greater than len, and for all nonnegative integers j less
  than searchLen, the code unit at index k+j of S is the same as the code unit
  at index j of searchStr, return true; but if there is no such integer k,
  return false.
  ...
features: [String.prototype.includes]
---*/
var str = 'The future is cool!';

assert.sameValue(
  str.includes('The future', 1), false,
  'Returns false on str.includes("The future", 1)'
);

assert.sameValue(
  str.includes(str, 1), false,
  'Returns false on str.includes(str, 1)'
);
