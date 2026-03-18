<div align="center">

<br/>

# 💼 PH Job Tracker

**A clean, interactive job application tracker built with vanilla HTML, CSS & JavaScript**

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Complete-brightgreen)]()

<br/>

> *Track your job applications, monitor interview stages, and stay on top of your career journey — all in one elegant interface.*

<br/>

</div>

---

## 🌟 What is This?

**PH Job Tracker** is a fully client-side job application management dashboard. Built as part of the **Programming Hero (Batch-13, Assignment 4)** course, it demonstrates real-world DOM manipulation, dynamic UI rendering, event delegation, and local state management — without any frameworks or dependencies.

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| 📋 **Job Cards** | Beautifully rendered cards for each job listing |
| 📊 **Live Dashboard** | Real-time stats: Total, Interview, and Rejected counts |
| 🗂️ **Tab Filtering** | Instantly filter by All / Interview / Rejected |
| 🌙 **Dark Mode** | Smooth light/dark theme toggle with persistence |
| 🔔 **Toast Notifications** | Action feedback on status changes |
| 📭 **Empty State** | Friendly UI when no jobs match the filter |

---

## 🖥️ Live Preview

```
┌────────────────────────────────────────────────────────┐
│  💼 Job Application Tracker                    [🌙]    │
├──────────┬─────────────┬─────────────────────────────  │
│  Total   │  Interview  │  Rejected                     │
│    8     │      0      │      0                        │
├──────────┴─────────────┴─────────────────────────────  │
│  Available Jobs                              8 jobs    │
│  [ All ] [ Interview ] [ Rejected ]                    │
│                                                        │
│  ┌──────────────────────┐  ┌──────────────────────┐   │
│  │  Software Engineer   │  │  Frontend Dev        │   │
│  │  Google · Remote     │  │  Meta · Dhaka        │   │
│  │  [Mark Interview]    │  │  [Mark Interview]    │   │
│  └──────────────────────┘  └──────────────────────┘   │
└────────────────────────────────────────────────────────┘
```

---

## 🧠 JavaScript Concepts Demonstrated

This project puts the following DOM & event concepts into practice:

### 🔎 DOM Selection
```js
// getElementById — single element by ID
document.getElementById('theme-toggle')

// querySelector — CSS selector, returns first match
document.querySelector('.tab-btn.active')

// querySelectorAll — CSS selector, returns NodeList of all matches
document.querySelectorAll('.tab-btn')
```

### ➕ Creating & Inserting Elements
```js
const card = document.createElement('div');
card.classList.add('job-card');
container.appendChild(card);       // adds at end
container.prepend(card);           // adds at start
```

### 🫧 Event Bubbling & Delegation
```js
// Instead of attaching listeners to every card button...
// We attach ONE listener to the parent container:
document.getElementById('cards-container').addEventListener('click', (e) => {
  if (e.target.matches('.action-btn')) {
    handleAction(e.target.dataset.id);
  }
  // event bubbles UP from child → parent
});
```

### 🚫 `preventDefault` vs `stopPropagation`
```js
// Stops the browser's default behavior (e.g. form submit, link navigation)
e.preventDefault();

// Stops the event from bubbling up to parent elements
e.stopPropagation();
```

> 📚 Sources: [MDN Web Docs](https://developer.mozilla.org), [Google](https://google.com), [ChatGPT](https://chatgpt.com)

---

## 📁 Project Structure

```
PH-Job-Tracker/
│
├── index.html          ← App shell: layout, tabs, dashboard, toast
├── app.js              ← All logic: rendering, filtering, events, dark mode
│
└── css/
    ├── style.css       ← Complete styling, dark mode variables, animations
    └── jobs.png        ← Empty state illustration
```

---

## 🚀 Getting Started

No build tools. No install. Just open and run.

**Option 1 — Direct open:**
```bash
# Clone the repo
git clone https://github.com/Safin313-stack/Assingment-B13-A4-PH-Job-Tracker.git

# Open in browser
open index.html
```

**Option 2 — Live Server (VS Code):**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → **Open with Live Server**
3. Done ✅

---

## 🎨 Tech Stack

```
Frontend Only — Zero Dependencies
─────────────────────────────────
  HTML5       →  Semantic structure & accessibility
  CSS3        →  Custom properties, flexbox, dark mode
  JavaScript  →  Vanilla ES6+, DOM API, Event handling
  Google Fonts→  Inter typeface
```

---

## 📖 Key Concepts Quick Reference

> **`getElementById`** → Targets one element by its unique `id`. Returns the element or `null`.

> **`getElementsByClassName`** → Returns a live HTMLCollection of all elements with that class.

> **`querySelector`** → Returns the first element matching any CSS selector. Most flexible option.

> **`querySelectorAll`** → Returns a static NodeList of all matching elements.

> **Event Bubbling** → When an event fires on a child, it propagates upward through all ancestor elements, unless stopped.

> **Event Delegation** → Attach one listener to a parent to handle events from many children — great for dynamic content and performance.

> **`preventDefault()`** → Cancels the browser's built-in default action for that event.

> **`stopPropagation()`** → Prevents the event from traveling further up the DOM tree.

---

## 👤 Developer

<div align="center">

**Saharia Hassan Safin**

[![GitHub](https://img.shields.io/badge/GitHub-Safin313--stack-181717?style=flat&logo=github)](https://github.com/Safin313-stack)

*Built with focus, curiosity, and a lot of console.log() 🛠️*

</div>

---

## 📜 License

```
MIT License — Free to use, modify, and distribute.
© 2025 Saharia Hassan Safin
```

---

<div align="center">

⭐ **If this helped you, drop a star — it means a lot!**

</div>







# Assingment-B13-A4-PH-Job-Tracker
Question Solve >>>>>

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById = returns one element by its ID.
getElementsByClassName = returns all elements with a given class name.
querySelector / querySelectorAll → return the first element or all elements matching a CSS selector.

2. How do you create and insert a new element into the DOM?
Answer: I create a new element using document.createElement() and insert it into the DOM using methods like appendChild(), append(), or prepend().

3. What is Event Bubbling? And how does it work?
Answer: Event bubbling is when an event occurs on an element and then automatically propagates to its parent elements in the DOM.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event delegation is a technique in which you add a single event listener to a parent element to handle events for its child elements. It’s useful because it improves performance and works for dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() stops the browser’s default action, while stopPropagation() stops the event from bubbling up to parent elements.





source: Google ; ChatGPT ; MDN Web Docs  
