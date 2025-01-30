# JavaScript Null Check Bug

This repository demonstrates a common JavaScript bug involving null or undefined values in arithmetic operations.

## The Bug
The `foo` function adds two numbers. However, it fails to handle cases where either input is `null`. This leads to unexpected results, as shown in the `bug.js` file.

## The Solution
The `bugSolution.js` file corrects this issue by explicitly checking for `null` values before performing the addition.  This ensures that the function handles all possible input scenarios correctly.

## How to Run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` to see the buggy and corrected code.
3. Run the files using Node.js (or a similar JavaScript environment) to observe the differences in output.

This example highlights the importance of robust null checks in JavaScript to prevent runtime errors and ensure predictable program behavior.