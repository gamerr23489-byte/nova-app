"use client";

import { useState } from "react";

export default function HomePage() {
  const [active, setActive] = useState("Home");

  const navigation = ["Home", "Stories", "Messages", "Discover", "Profile"];

  return (
    <main className="nova-app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">N</span>
          <span>NOVA</span>
        </div>

        <div className="status">
          <span className="status-dot" />
          Live
        </div>
      </header>

      <section className="hero">
        <p className="eyebrow">WELCOME TO NOVA</p>

        <h1>
          Your world.
          <br />
          <span>Connected differently.</span>
        </h1>

        <p className="subtitle">
          Share moments, connect with friends, discover what's happening,
          and step into NOVA Spaces.
        </p>

        <div className="actions">
          <button className="primary" onClick={() => setActive("Stories")}>
            Open Stories
          </button>

          <button className="secondary" onClick={() => setActive("Discover")}>
            Explore NOVA
          </button>
        </div>
      </section>

      <section className="quick-grid">
        <button onClick={() => setActive("Stories")}>
          <strong>Stories</strong>
          <span>See what your friends are sharing.</span>
        </button>

        <button onClick={() => setActive("Messages")}>
          <strong>Messages</strong>
          <span>Chat and react in real time.</span>
        </button>

        <button onClick={() => setActive("Discover")}>
          <strong>Discover</strong>
          <span>Find trends and new conversations.</span>
        </button>

        <button onClick={() => setActive("Profile")}>
          <strong>NOVA Spaces</strong>
          <span>Enter temporary shared spaces.</span>
        </button>
      </section>

      <nav className="bottom-nav">
        {navigation.map((item) => (
          <button
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      <footer>
        <span>NOVA 1.0</span>
        <span>Built by SkyLink Devs</span>
      </footer>
    </main>
  );
}
