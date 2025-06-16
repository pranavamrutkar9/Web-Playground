# FaultyCalculator-JavaScript
A fun JavaScript-based calculator that gives correct results 90% of the time... and hilariously wrong ones 10% of the time by secretly swapping operators. Great for learning Math.random(), prompt(), and eval() in JS!

✨ Features

- Accepts user input for two numbers and an operator (`+`, `-`, `*`, `/`)
- Calculates the result using JavaScript's `eval()` function
- **90% chance** of giving the correct answer
- **10% chance** of secretly swapping the operator and giving an incorrect (but convincing) result
- Great for learning about:
  - `Math.random()`
  - JavaScript objects and conditionals
  - `prompt()` and `alert()` for interaction

---

🔍 How It Works

1. User enters two numbers (`a` and `b`).
2. User selects an arithmetic operator.
3. The calculator:
   - Uses the correct operator 90% of the time
   - Uses a **mapped wrong operator** 10% of the time
4. The result is displayed using `alert()` and logged to the console.

---

🔁 Faulty Operator Mapping

 ------------------------------------
| Correct Operator | Faulty Operator |
|------------------|-----------------|
| `+`              | `-`             |
| `-`              | `/`             |
| `*`              | `+`             |
| `/`              | `-`             |
 ------------------------------------
---

📁 Files

- `index.html` – Optional basic webpage container
- `faulty-calculator.js` – Main JavaScript logic
