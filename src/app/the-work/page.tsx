import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "The Work",
  description:
    "Ways to work with Mike Mata, CMPC®: mental skills that fit into everyday life, plus applied tools that power performance mastery.",
};

export default function TheWork() {
  return (
    <>
      <section className="page-top fold-slate work-intro">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">The work</p>
            <h1>A source of support. A strategy for performance.</h1>
          </Reveal>
          <Reveal className="prose">
            <p>
              <strong className="hl-sky">Mike Mata</strong> is a mental skills
              coach (CMPC®) who helps people perform at their best,{" "}
              <span className="hl-mint">virtual and in-person</span>.
            </p>
            <p>
              The focus: mental skills that fit into everyday life, plus applied
              tools that power performance mastery.
            </p>
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
