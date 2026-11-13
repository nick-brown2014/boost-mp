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
            Strategic mentorship and mental skills for athletes, performing
            artists, leaders, and organizations, virtual and in-person.
          </p>
          <div className="actions">
            <Link className="button" href="/contact">
              I’m intrigued
            </Link>
            <Link className="button ghost" href="/about">
              Meet Mike
            </Link>
          </div>
        </div>
        <a className="scroll-cue" href="#intro" aria-label="Scroll to content">
          <span />
        </a>
      </Parallax>

      <section id="intro" className="fold fold-slate">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">The work</p>
            <h2>
              A source of support. <em>A strategy for performance.</em>
            </h2>
          </Reveal>
          <Reveal className="prose">
            <p>
              <span className="hl-sky">Mike Mata</span> is a mental skills coach
              (CMPC®) who helps people perform at their best,{" "}
              <span className="hl-mint">virtual and in-person</span>.
            </p>
            <p>
              The focus: mental skills that fit into{" "}
              <span className="hl-mint">everyday life</span>, plus applied tools
              that power <span className="hl-mint">performance</span> mastery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="fold fold-cream">
        <div className="wrap">
          <Reveal className="section-heading">
            <p className="eyebrow">The approach</p>
            <h2>Getting to know yourself is where it starts.</h2>
          </Reveal>
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
      </section>

      <Parallax src={nature} speed={0.2} className="band">
        <div className="wrap">
          <Reveal className="band-quote">
            <blockquote>
              It’s a space to co-author plans, to chase aspirations, and to get
              curious.
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
              Coaching for individuals and groups who want to compete, create,
              and lead with more clarity and confidence.
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
