import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffe" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            commodi beatae ad asperiores nostrum, ratione molestiae voluptatibus
            vero. Rem nesciunt aperiam reprehenderit exercitationem ex repellat
            provident quidem, deleniti labore eum.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
