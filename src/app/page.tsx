import Image from "next/image";
import Link from "next/link";
import { Parallax } from "@/components/parallax";
import { Reveal } from "@/components/reveal";
import { specialties } from "@/lib/site";
import cmpc from "../../public/images/cmpc-badge.png";
import nature from "../../public/images/nature.jpg";
import snowHike from "../../public/images/snow-hike.jpg";

const pillars = [
  ["Know yourself", "Get curious about who you are and what drives you."],
  ["Lead with strengths", "Build on what already works for you."],
  ["Live your values", "Make choices that line up with what matters most."],
  [
    "Train the mind",
    "Work with your mind in a kind, effective, and consistent way.",
  ],
];

const terrain = [
  [100, "M0 320 L18 316 L35 318 L55 313 L72 315 L88 311 L100 310"],
  [1000, "M0 310 L30 304 L62 308 L100 294 L128 298 L170 282 L205 287 L245 266 L262 260 L290 263 L318 248 L352 252 L378 234 L410 239 L445 216 L470 221 L497 196 L520 188 L548 192 L585 170 L612 176 L650 157 L690 162 L722 138 L750 126 L772 117 L800 122 L836 100 L868 106 L905 82 L940 88 L972 70 L1000 58"],
  [100, "M0 58 L15 48 L30 52 L50 30 L65 36 L85 16 L100 10"],
] as const;

export default function Home() {
  return (
    <>
      <Parallax
        src={snowHike}
        speed={0.35}
        preload
        className="hero"
        alt="A snowboarder hiking a snowy ridge with a board strapped to their pack"
      >
        <div className="wrap hero-inner">
          <p className="eyebrow">Mental performance coaching</p>
          <h1>Boost by Mike</h1>
          <p className="hero-lede">
            Strategic mentorship and mental skills training for athletes, performing
            artists, leaders, and organizations.
          </p>
          <div className="actions">
            <Link className="button ghost" href="/about">
              Meet Mike
            </Link>
          </div>
        </div>
        <a className="scroll-cue" href="#intro" aria-label="Scroll to content">
          <span />
        </a>
      </Parallax>

      <section id="intro" className="fold fold-cream approach">
        <div className="wrap">
          <Reveal className="section-heading">
            <p className="eyebrow">The approach</p>
            <h2>Getting to know yourself is where it starts.</h2>
          </Reveal>
        </div>
        <div className="approach-climb">
          <Reveal className="terrain">
            {terrain.map(([w, d], i) => (
              <svg
                key={i}
                className={i === 1 ? "terrain-main" : undefined}
                viewBox={`0 0 ${w} 416`}
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <path className="terrain-fill" d={`${d} L${w} 416 L0 416 Z`} />
                <path className="terrain-line" d={d} />
              </svg>
            ))}
          </Reveal>
          <div className="wrap">
            <ol className="pillars">
              {pillars.map(([title, body], i) => (
                <Reveal as="li" key={title}>
                  <span className="pillar-num">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Parallax src={nature} speed={0.2} className="band">
        <div className="wrap">
          <Reveal className="band-quote">
            <blockquote>
              It’s a space to co-author a strategy, to get curious, and to outline
              tools that both drive performance mastery and fit into everyday life.
            </blockquote>
          </Reveal>
        </div>
      </Parallax>

      <section className="fold fold-slate">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Who Mike works with</p>
            <h2>From the start gate to the stage.</h2>
            <p className="muted">
              Coaching for anyone who wants to compete, create, lead, or come
              back from injury with more clarity and confidence.
              <br></br>
              <br></br>
              Whether at the individual level or for the whole team, mental
              performance can be the edge that makes the difference.
            </p>
          </Reveal>
          <ul className="specialties">
            {specialties.map((item) => (
              <Reveal as="li" key={item}>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="fold fold-cream">
        <div className="wrap credentials">
          <Reveal className="credentials-badge">
            <Image
              src={cmpc}
              alt="Certified Mental Performance Consultant (CMPC) badge"
              sizes="220px"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Credentials</p>
            <h2>Trained and certified.</h2>
            <ul className="checklist">
              <li>M.A. Sport & Performance Psychology</li>
              <li>Certified Mental Performance Consultant (CMPC)®</li>
            </ul>
            <Link className="text-link" href="/about">
              More about Mike →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="fold fold-deep">
        <Reveal className="wrap cta">
          <h2>Have a project in mind, or want to work with Mike?</h2>
          <Link className="button" href="/contact">
            Start the conversation
          </Link>
        </Reveal>
      </section>
    </>
  );
}
