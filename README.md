# 🐐 Lamine Yamal Everywhere – Chrome Extension

> Replaces every image on every website with the glorious face of Lamine Yamal. Because the internet clearly doesn’t have enough of him.

---

## 🤔 Why?

Why not?

Sometimes you're browsing Real Madrid’s website and feel it's missing something. That something... is **Lamine Yamal**.

Now you can experience the joy of seeing him **everywhere** — YouTube thumbnails, background images, and even profile pics on Google Search (oops).

---

## 🧠 What does it do?

- Replaces **every `<img>`** tag with a random image of Lamine Yamal.
- Replaces **background images** set in CSS too, just in case some sneaky ones try to hide.
- Converts all `<h2>` tags to proudly display `"Lamine Yamal"`.
- Ignores tiny icons (like favicons or little PFPs) because we don’t want Lamine squished in a 12px circle. He deserves better.
- Keeps working even if the page loads new images (thanks to our lazy but reliable friend, `setInterval()`).

---

## 📸 Demo

![Demo Screenshot](https://media.giphy.com/media/3o7TKsQ43pHgkVOh6U/giphy.gif)

> This isn't Yamal. This is just the energy of this extension.

---

## 🧙‍♂️ Installation

1. Clone or download this repo.
2. Go to `chrome://extensions/` in Chrome.
3. Enable **Developer Mode**.
4. Click **"Load unpacked"** and select the folder.
5. Boom. You're now spiritually closer to Yamal.

---

## 🧨 Known Issues

- Might **annoy Real Madrid fans**.
- Google sometimes throws `Extension context invalidated` errors — ignore it, it’s just Chrome being dramatic.
- If Lamine appears too large and eats half the screen: that’s a feature, not a bug.
- Does not yet replace Messi or Ronaldo... but give it time.

---

## 🛠️ Customization

Wanna change the images?

Go into `content.js`  
Find this line:

```js
const yamalImages = [ /* glorious URLs */ ];

