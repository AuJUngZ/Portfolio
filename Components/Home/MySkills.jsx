import React from "react";

export default function MySkills() {
  return (
    <div className="container mt-3">
      <div className="title">
        <h1 className="text-center">My Skills</h1>
        <div className="underline"></div>
      </div>
      <div className="card-skills">
        <div className="card">
          <h3 className="text-center">C++ language</h3>
          <p>
            C++ for me, I think I can write it easily without worrying too much.
            As a first-year student, I've done projects using this language.
          </p>
        </div>
        <div className="card-mid">
          <h3 className="text-center">Java language</h3>
          <p>
            I can write an oop of this language very well and understand it a
            lot. Because in the past 1-2 years, I have had the opportunity to
            use it to do projects in each subject that I have studied.
          </p>
        </div>
        <div className="card">
          <h3 className="text-center">Web Developer</h3>
          <p>
            Building this website is just the beginning. Still not very skilled
            Give it a little more time and it'll be fine.
          </p>
          <p className="text-warning">
            Skills : HTML, CSS, JavaScript, React, Next.js, Database
          </p>
        </div>
        <div className="card-mid">
          <h3 className="text-center">Other</h3>
          <p>
            Every time I spend my free time to study new knowledge all the time,
            such as learning a new language. new technology
          </p>
        </div>
      </div>
    </div>
  );
}
