const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('#CountOnly', () => {
  it('returns a count of the names in the array, given an object with boolean values, to determine who to count', () => {
    const firstNames = ["Karl", "salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    
    assert.deepEqual(result1["Jason"], 1);
  });
  it('returns undefined, given an object key with a ture value, but no one to count', () => {
    const firstNames = ["Karl", "salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
   
    assert.deepEqual(result1["Karima"], undefined);
  });
  it('returns a count of the names in the array, given an object with boolean values, to determine who to count', () => {
    const firstNames = ["Karl", "salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

    assert.deepEqual(result1["Fang"], 2);
  });
  it('returns undefined, given an object key with a false value', () => {
    const firstNames = ["Karl", "salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

    assert.deepEqual(result1["Agouhanna"], undefined);
  });
});