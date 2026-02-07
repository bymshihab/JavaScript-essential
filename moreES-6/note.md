# JavaScript Array Built-in Methods

This document summarizes commonly used JavaScript array methods with clear definitions, behavior, and examples.

---

## `map()`

**Purpose**
- Transforms each element of an array

**Behavior**
- Iterates over the array
- Returns a **new array**
- Does **not** mutate the original array
- Returned array length is always the same as the original

**Example**
```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
// [2, 4, 6]
```

---

### **Part 2: `forEach` and `find`**

```markdown
## `forEach()`
```
**Purpose**
- Executes a function on each array element

**Behavior**
- Iterates over the array
- **Does not return** a new array (returns `undefined`)
- Does **not** mutate the original array unless elements are modified directly

**Example**
```js
const nums = [1, 2, 3];
nums.forEach(n => console.log(n * 2));
// logs: 2, 4, 6
```

---

### **Part 3: `reduce` and Summary Table**
## `reduce()`
**Purpose**
- Reduces array to a **single value** by applying a function

**Behavior**
- Iterates over the array
- Returns a single value (any type)
- Can optionally provide an **initial value**
- Does **not** mutate the original array

**Example**
```js
const nums = [1, 2, 3, 4];  
const sum = nums.reduce((acc, n) => acc + n, 0);
// 10
```