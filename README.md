<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,50:16213e,100:0f3460&height=200&section=header&text=PH%20Job%20Tracker&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Track%20smarter.%20Apply%20better.%20Land%20faster.&descAlignY=60&descSize=16&descColor=94a3b8" width="100%"/>

<br/>

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MIT License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](LICENSE)
[![Deployed](https://img.shields.io/badge/Deployed-GitHub%20Pages-0ea5e9?style=flat-square&logo=github)](https://safin313-stack.github.io/Assingment-B13-A4-PH-Job-Tracker/)
[![PH Batch](https://img.shields.io/badge/Programming%20Hero-Batch%2013-f97316?style=flat-square)](https://web.programming-hero.com)

<br/>

<a href="https://safin313-stack.github.io/Assingment-B13-A4-PH-Job-Tracker/">
  <img src="https://img.shields.io/badge/-%F0%9F%9A%80%20%20LIVE%20DEMO%20%20%E2%86%92-0f3460?style=for-the-badge&logoColor=white" alt="Live Demo" height="42"/>
</a>

<br/>
<sub>✦ No login &nbsp;·&nbsp; No install &nbsp;·&nbsp; Opens instantly in your browser ✦</sub>

<br/><br/>

</div>

---

<div align="center">

### 💼 What You Get

| 📋 Job Cards | 📊 Live Stats | 🗂️ Tab Filter | 🌙 Dark Mode | 🔔 Toast Alerts |
|:---:|:---:|:---:|:---:|:---:|
| Beautiful card layout for every job listing | Real-time Total · Interview · Rejected counter | Switch between All / Interview / Rejected instantly | One-click light ↔ dark theme toggle | Instant feedback on every action |

</div>

---

## 🖥️ Interface Preview

```
╔══════════════════════════════════════════════════════════╗
║  💼  Job Application Tracker                      [☀️]  ║
╠═══════════════╦══════════════════╦═══════════════════════╣
║  Total  ·  8  ║  Interview  ·  0 ║  Rejected  ·  0      ║
╠═══════════════╩══════════════════╩═══════════════════════╣
║  Available Jobs                                 8 jobs   ║
║  ┌─────────┐  ┌───────────┐  ┌──────────┐               ║
║  │   All   │  │ Interview │  │ Rejected │               ║
║  └─────────┘  └───────────┘  └──────────┘               ║
║                                                          ║
║  ╔══════════════════════╗  ╔══════════════════════╗      ║
║  ║  Software Engineer   ║  ║   Frontend Dev       ║      ║
║  ║  Google  ·  Remote   ║  ║   Meta  ·  Dhaka     ║      ║
║  ║  [ Mark Interview ]  ║  ║  [ Mark Interview ]  ║      ║
║  ╚══════════════════════╝  ╚══════════════════════╝      ║
╚══════════════════════════════════════════════════════════╝
```

---

## 🧠 JavaScript Concepts in Action

> This project is built to demonstrate core DOM & event concepts in a real-world app context.

### 🔎 DOM Selection Methods

```js
document.getElementById('theme-toggle')      // one element by ID
document.querySelector('.tab-btn.active')    // first match by CSS selector
document.querySelectorAll('.tab-btn')        // all matches → NodeList
```

### ➕ Creating & Inserting Elements

```js
const card = document.createElement('div');
card.classList.add('job-card');
container.appendChild(card);   // insert at end
container.prepend(card);       // insert at start
```

### 🫧 Event Delegation (not attaching to every button)

```js
document.getElementById('cards-container').addEventListener('click', (e) => {
  if (e.target.matches('.action-btn')) {
    handleAction(e.target.dataset.id);
    // event bubbles UP: child → parent → document
  }
});
```

### 🚫 preventDefault vs stopPropagation

```js
e.preventDefault();     // cancels default browser action (form submit, link nav)
e.stopPropagation();    // stops event from bubbling up to parent elements
```

> 📚 References: [MDN Web Docs](https://developer.mozilla.org) · [Google](https://google.com) · [ChatGPT](https://chatgpt.com)

---

## 📁 Project Structure

```
Assingment-B13-A4-PH-Job-Tracker/
│
├── 📄 index.html        ← App shell · tabs · dashboard · toast
├── ⚙️  app.js           ← All logic · rendering · filtering · dark mode
│
└── 📂 css/
    ├── 🎨 style.css     ← Styling · dark mode variables · animations
    └── 🖼️  jobs.png     ← Empty state illustration
```

---

## 🚀 Run It Yourself

**Option 1 — Live (instant, no setup)**

> 🔗 **[https://safin313-stack.github.io/Assingment-B13-A4-PH-Job-Tracker/](https://safin313-stack.github.io/Assingment-B13-A4-PH-Job-Tracker/)**

**Option 2 — Clone & open locally**

```bash
git clone https://github.com/Safin313-stack/Assingment-B13-A4-PH-Job-Tracker.git
cd Assingment-B13-A4-PH-Job-Tracker
open index.html
```

**Option 3 — VS Code Live Server**

```
1. Install Live Server extension
2. Right-click index.html → Open with Live Server
3. App opens at localhost:5500 ✅
```

---

## 🛠️ Tech Stack

```
┌─────────────────────────────────────────┐
│         Frontend · Zero Dependencies    │
├──────────────┬──────────────────────────┤
│  HTML5       │  Semantic structure      │
│  CSS3        │  Custom props · flexbox  │
│  JavaScript  │  Vanilla ES6+ · DOM API  │
│  Google Fonts│  Inter typeface          │
└──────────────┴──────────────────────────┘
```

---

## 📖 Concept Quick Reference

```
getElementById        → one element by ID
getElementsByClassName→ all elements by class (live HTMLCollection)
querySelector         → first element matching CSS selector
querySelectorAll      → all elements matching CSS selector (static NodeList)

Event Bubbling        → event travels: child → parent → document
Event Delegation      → one parent listener handles all child events
preventDefault()      → stops browser's default action
stopPropagation()     → stops event from bubbling further
```

---

<div align="center">

## 👤 Developer

<br/>

**Saharia Hassan Safin**
Front-end Developer · Programming Hero Batch 13

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-Safin313--stack-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Safin313-stack)
&nbsp;
[![Live Project](https://img.shields.io/badge/Live%20Project-Visit%20Now-0ea5e9?style=for-the-badge&logo=vercel&logoColor=white)](https://safin313-stack.github.io/Assingment-B13-A4-PH-Job-Tracker/)

<br/>

*"Built with focus, curiosity, and a lot of `console.log()`"* 🛠️

<br/>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f3460,50:16213e,100:1a1a2e&height=120&section=footer" width="100%"/>

<sub>MIT License · © 2025 Saharia Hassan Safin · ⭐ Star this repo if it helped you!</sub>

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
