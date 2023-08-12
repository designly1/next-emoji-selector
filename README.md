Emojis 😃🌟🌈 have become an integral part of our digital conversations. They inject personality into our texts 📝, express emotions 🥰😂😢, and sometimes even say more than words themselves could 🙌. As developers, providing an avenue for users to seamlessly integrate these colorful characters into their input not only makes our applications more interactive but also more human 💬❤️.

In the vast universe of web development, the potent trio of Next.js, Tailwind CSS, and DaisyUI stands out as the constellation for modern, efficient, and stylish web components ✨🔧🎨. In this blog post, we're diving deep into the cosmos of code to guide you on creating an emoji selector for your Next.js forms that's both functional and fabulous 🚀🌐.

This tutorial project uses Next.js bootstrapped using `create-next-app@latest`. The full GitHub repo and demo site are linked at the bottom of the article. With that said, on to the code!

The first thing we need to do is create our library of emojis. The ones listed below are abridged for sake of brevity:

```js
export const emojis = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😊",
];
```

Next, let's create our reusable `EmojiSelector` component:

```jsx
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { emojis } from "@/data/emojis";

interface Props {
  setter: Dispatch<SetStateAction<string>>;
}

export default function EmojiSelector(props: Props) {
  const { setter } = props;
  const [displayEmoji, setDisplayEmoji] = useState<string>(emojis[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (emoji: string) => {
    setIsOpen(false);
    setter((old) => old + ` ${emoji}`);
  };

  return (
    <div className="collapse bg-base-200 collapse-arrow">
      <input
        type="checkbox"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div className="collapse-title text-xl font-medium">{displayEmoji}</div>
      <div className="collapse-content text-4xl grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            className="hover:scale-125 transition-transform ease-in-out duration-200 p-4"
            onClick={() => handleClick(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
```

Lastly, we'll create a simple for with a `textarea` to demonstrate usage:

```jsx
import React, { useState } from "react";
import EmojiSelector from "./EmojiSelector";

export default function HomePageView() {
  const [text, setText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="mt-20 mx-auto bg-zinc-200 w-full max-w-2xl p-6 rounded-xl flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center">
          Welcome to the Next.js Emoji Selector!
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter some text</span>
          </label>
          <textarea
            className="textarea h-24 textarea-bordered textarea-lg"
            placeholder="Enter some text"
            value={text}
            onChange={handleChange}
          />
        </div>

        <EmojiSelector setter={setText} />
      </div>
    </>
  );
}
```

And there you have it! By now, you should have a vibrant emoji selector seamlessly integrated into your Next.js forms, ready to capture the myriad emotions and expressions of your users. 🌟🥳 Through the power of Tailwind CSS and DaisyUI, not only did we create a functional feature but also a visually pleasing one. 🎨🔥

As we wrap up this guide, remember that the digital landscape is ever-evolving. Always strive to infuse your applications with elements that resonate with users, making their interactions memorable and enjoyable. 🌐💖 Emojis are just the tip of the iceberg when it comes to enhancing UX; the possibilities are endless, bounded only by imagination and creativity. 🚀🌌

Keep coding, keep innovating, and most importantly, keep adding those delightful touches to your projects. Until next time, happy coding! 👩‍💻👨‍💻🎈

1. [Demo Site](https://next-emoji-selector.vercel.app/)
2. [GitHub Repo](https://github.com/designly1/next-emoji-selector)

---

Thank you for taking the time to read my article and I hope you found it useful (or at the very least, mildly entertaining). For more great information about web dev, systems administration and cloud computing, please read the [Designly Blog](https://blog.designly.biz). Also, please leave your comments! I love to hear thoughts from my readers.

If you want to support me, then please [Follow Me on Spotify!](https://open.spotify.com/artist/1iyy5yeUB398YUCSY20Zdc?si=0U5VXmGET3qFpyRsYz8FUg)

Looking for a web developer? I'm available for hire! To inquire, please fill out a [contact form](https://designly.biz/contact).