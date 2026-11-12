"use client";
import { useState } from "react";

const reviews = [
  ["r p", "Had a great experience with India To International for NEET counseling. Even though their name highlights international admissions, their expertise in domestic medical counseling is equally strong.", "a month ago"],
  ["Sejal Patnaik", "I had a really positive experience with Navin sir and Vikas sir. They were patient, understanding, and genuinely supportive throughout the process. Their guidance helped me gain better clarity.", "2 months ago"],
  ["Surya Senthil", "I'm really grateful that I found Mr. Navin during my PG counselling. He is such a genuine human being and his services are top notch. He is not only knowledgeable but very supportive.", "a month ago"],
  ["Adhishri Karbhari", "I had a very positive experience with the team during my MDS counselling process. They are professional, patient, approachable, and genuinely committed to helping students decide.", "2 months ago"],
  ["Rahul M", "Clear choice-filling strategy and honest advice at every round. Highly recommended for MCC and state counselling.", "3 months ago"],
];
const bars = [["5", 100], ["4", 0], ["3", 0], ["2", 0], ["1", 0]];
const VISIBLE = 3, STEPS = reviews.length - VISIBLE + 1;

export default function Review() {
  const [pos, setPos] = useState(0);
  const go = (n) => setPos((n + STEPS) % STEPS);
  return (
    <section className="section soft">
      <div className="wrap">
        <p className="hash center">{"# Testimonial"}</p>
        <h2 className="center big">Our Google Reviews</h2>
        <div className="rv-stage">
          <button className="round" aria-label="Previous review" onClick={() => go(pos - 1)}>‹</button>
          <div className="rv-grid">
            {reviews.slice(pos, pos + VISIBLE).map(([n, t, when]) => (
              <figure key={n} className="rv">
                <span className="avatar"><b>{n[0].toUpperCase()}</b><i className="g">G</i></span>
                <figcaption><span>{n}</span><span className="stars">★★★★★</span></figcaption>
                <p>“{t}”</p>
                <small>◷ {when}</small>
              </figure>
            ))}
          </div>
          <button className="round" aria-label="Next review" onClick={() => go(pos + 1)}>›</button>
        </div>
        <div className="dots">
          {Array.from({ length: STEPS }, (_, i) => (
            <button key={i} className={i === pos ? "on" : ""} aria-label={`Show reviews ${i + 1}`} onClick={() => setPos(i)} />
          ))}
        </div>

        <div className="gbox">
          <div className="gscore">
            <b className="glogo"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></b>
            <strong>4.9</strong>
            <span className="stars big-stars">★★★★★</span>
            <small>Based on 163 reviews</small>
          </div>
          <div className="gbars">
            {bars.map(([s, v]) => (
              <div key={s}><span>{s} <i className="stars">★</i></span><div className="track"><div style={{ width: v + "%" }} /></div><span>{v}%</span></div>
            ))}
          </div>
          <div className="gcta">
            <a className="btn btn-solid pillbtn" href="#">↗ See All Reviews</a>
            <small>✔ Verified Google Reviews</small>
          </div>
        </div>
      </div>
    </section>
  );
}
