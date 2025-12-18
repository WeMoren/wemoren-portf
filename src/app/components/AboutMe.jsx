import React from "react";
import Image from "next/image";
import styles from "./AboutMe.module.css";
const AboutMe = () => {
  return (
    <div className="">
      <section className={styles.AboutMe}>
        <h2 className={styles.sectionHeader}>About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              I&apos;m Uwem Umoren, a frontend developer passionate about
              building modern, responsive, and interactive web applications. I
              love turning ideas into clean, functional code and creating
              delightful user experiences.
            </p>
            <p>
              I&apos;m always exploring new technologies and constantly
              improving my skills to deliver the best solutions.
            </p>
            <a href="/wemoren-portfolio.pdf" download>
              <button className={styles.resumeBtn}>Download Resume</button>
            </a>
          </div>
          <div className="about-image">
            <Image
              src="/profile.png"
              alt="Uwem Umoren"
              width={250}
              height={250}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
