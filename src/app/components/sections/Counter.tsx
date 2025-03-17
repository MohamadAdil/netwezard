"use client";

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const counters = [
  { id: 1, label: "Project Completed", value: 73 },
  { id: 2, label: "Clients Worked", value: 18 },
  { id: 3, label: "Tweets", value: 567 },
  { id: 4, label: "Cups of Coffee", value: 129 },
];

export default function Counter() {
  const [counts, setCounts] = useState(
    counters.map((counter) => ({ ...counter, animatedValue: 0 }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((counter) => {
          if (counter.animatedValue < counter.value) {
            return {
              ...counter,
              animatedValue: counter.animatedValue + 1,
            };
          }
          return counter;
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {counts.map((counter) => (
            <div key={counter.id} className="col-12 col-sm-6 col-md-3 text-center">
              <h2 className="display-4 fw-bold">{counter.animatedValue}</h2>
              <p>{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
