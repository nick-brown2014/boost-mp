import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { site, specialties } from "@/lib/site";
import cmpc from "../../../public/images/cmpc-badge.png";
import mike01 from "../../../public/images/mike-01.jpg";
import mike02 from "../../../public/images/mike-02.jpg";

export const metadata: Metadata = {
  title: "About Mike",
  description:
    "Mike Mata is a Certified Mental Performance Consultant (CMPC)® with an M.A. in Sport & Performance Psychology.",
};

export default function About() {
  return (
    <>
      <section className="page-top fold-slate">
        <div className="wrap about-hero">
          <Reveal className="about-photo">
            <Image
              src={mike01}
              alt="Mike Mata smiling, seated on an outdoor couch in the desert"
              sizes="(max-width: 900px) 100vw, 50vw"
              preload
              placeholder="blur"
            />
          </Reveal>
          <Reveal className="prose large">
            <p className="eyebrow">About</p>
            <h1>Meet Mike</h1>
            <p>
              <span className="hl-sky">Mike</span> is a mental skills coach{" "}
              <abbr title="Certified Mental Performance Consultant">
                (CMPC)
              </abbr>
              ® serving as a source of support and strategic mentorship for
              athletes, performing artists, leaders, and organizations (
              <span className="hl-mint">virtual and in-person</span>).
            </p>
          </Reveal>
        </div>
      </section>

      <section className="fold fold-slate tight">
        <div className="wrap about-body">
          <Reveal className="about-credentials">
            <ul className="marks">
              <li>M.A. Sport & Performance Psychology</li>
              <li>
                Certified Mental Performance Consultant{" "}
                <abbr title="Certified Mental Performance Consultant">
                  (CMPC)
                </abbr>
                ®
              </li>
              {site.linkedinUrl && (
                <li>
                  More Background / Experience:{" "}
                  <a href={site.linkedinUrl} className="hl-sky underline">
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
            <Link className="button" href="/contact">
              I’m Intrigued
            </Link>
          </Reveal>
          <Reveal className="prose">
            <p>
              The work involves getting to know oneself, leveraging strengths,
              living in accordance with values, and skillfully working with the
              mind in a kind, effective, and consistent manner.
            </p>
            <p>
              It’s a space to co-author plans, to chase aspirations, to get
              curious, and to outline mental skills that fit into{" "}
              <span className="hl-mint">everyday life +</span> applied tools
              that power <span className="hl-mint">performance</span> mastery.
            </p>
            <h3>Specialties:</h3>
            <ul className="bullets">
              {specialties.map((item) => (
                <li key={item} className="hl-mint">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="fold fold-cream">
        <div className="wrap accreditation">
          <Reveal className="accreditation-badge">
            <Image
              src={cmpc}
              alt="Certified Mental Performance Consultant (CMPC) badge, AASP"
              sizes="(max-width: 900px) 60vw, 320px"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Accreditation</p>
            <h2>Certified Mental Performance Consultant®</h2>
            <p>
              The CMPC® credential is awarded by the Association for Applied
              Sport Psychology (AASP) to practitioners who meet its standards
              for education, supervised experience, and ethical practice in
              mental performance consulting.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="fold fold-slate">
        <div className="wrap about-stage">
          <Reveal className="prose">
            <p className="eyebrow">Beyond sport</p>
            <h2>
              Performance happens on the mountain <em>and on the stage.</em>
            </h2>
            <p>
              Whether it’s a big-mountain line, a game-day lineup, or a live
              set, the mental skills are the same: focus, composure, and trust
              in your preparation. Mike works with musicians and performing
              artists alongside athletes and teams.
            </p>
            <Link className="button" href="/contact">
              Work with Mike
            </Link>
          </Reveal>
          <Reveal className="stage-photo">
            <Image
              src={mike02}
              alt="Mike playing drums on stage under purple and red lights"
              sizes="(max-width: 900px) 100vw, 40vw"
              placeholder="blur"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
