"use client";

import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Dilawar Ali",
    role: "CEO",
    image: "/img/team2.jpg",
  },
  {
    name: "Rajeev Kumar",
    role: "Sr. Web Designer",
    image: "/img/team1.jpg",
  },
  {
    name: "Mukesh Kumar",
    role: "Web Developer",
    image: "/img/team1.jpg",
  },
  {
    name: "Priyanka Sharma",
    role: "Quality Analyst and Content Writer",
    image: "/img/team3.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-5 bg-light">
      <div className="container text-center">
        <h1 className="mb-3">Meet Our Team</h1>
        <p className="mb-4">
          Our team is composed of young talented professionals who work
          dedicatedly on each project to ensure successful completion.
        </p>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="card border-0 shadow-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="card-img-top rounded"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Facebook size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Twitter size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
