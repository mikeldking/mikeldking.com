import React from "react"
import styles from "./resume.module.css"
import avatar from "../../content/assets/avatar.jpeg"

export default function Resume() {
  return (
    <div className={styles.pagewrap + " " + styles.container}>
      <img src={avatar} alt="Photo of Cthulu" className={styles.pic} />
      <div id="contact-info" className="vcard">
        <h1 className={styles.h1}>Mikel King</h1>

        <p className={styles.p}>
          Cell: <span className={styles.tel}>720-938-2269</span>
          <br />
          Email:{" "}
          <a
            className={styles.email + " " + styles.link}
            href="mailto:mikeldking@gmail.com"
          >
            mikeldking@gmail.com
          </a>
        </p>
      </div>
      <div className={styles.objective}>
        <p className={styles.p}>
          I'm a full-stack engineer that is deeply passionate about UI/UX, the
          web, design, data visualization, and mobile SW development. I enjoy
          stretching my skills in various areas including fields beyond
          engineering (ex. design, usability testing). That being said, I love
          being an engineer and solving complex problems. There is nothing
          better than knowing that your hard work can directly translate into
          making a person's life easier/better/more enjoyable.
        </p>
      </div>
      <div className={styles.clear}></div>
      <dl>
        <dd className={styles.clear + " " + styles.dd}></dd>
        <dt className={styles.dt}>Education</dt>
        <dd className={styles.dd}>
          <h2 className={styles.h2}>
            Withering Madness University - Planet Vhoorl
          </h2>
          <p className={styles.p}>
            <strong>Major:</strong> Public Relations
            <br />
            <strong>Minor:</strong> Scale Tending
          </p>
        </dd>

        <dd className={styles.clear + " " + styles.dd}></dd>
        <dt className={styles.dt}>Skills</dt>
        <dd className={styles.dd}>
          <h2 className={styles.h2}>Office skills</h2>
          <p className={styles.p}>
            Office and records management, database administration, event
            organization, customer support, travel coordination
          </p>

          <h2 className={styles.h2}>Computer skills</h2>
          <p className={styles.p}>
            Microsoft productivity software (Word, Excel, etc), Adobe Creative
            Suite, Windows
          </p>
        </dd>

        <dd className={styles.clear + " " + styles.dd}></dd>
        <dt className={styles.dt}>Experience</dt>
        <dd className={styles.dd}>
          <h2 className={styles.h2}>
            Doomsday Cult{" "}
            <span>Leader/Overlord - Baton Rogue, LA - 1926-2010</span>
          </h2>
          <ul className={styles.ul}>
            <li>
              Inspired and won highest peasant death competition among servants
            </li>
            <li>Helped coordinate managers to grow cult following</li>
            <li>Provided untimely deaths to all who opposed</li>
          </ul>

          <h2 className={styles.h2}>
            The Watering Hole{" "}
            <span>Bartender/Server - Milwaukee, WI - 2009</span>
          </h2>
          <ul className={styles.ul}>
            <li>Worked on grass-roots promotional campaigns</li>
            <li>Reduced theft and property damage percentages</li>
            <li>Janitorial work, Laundry</li>
          </ul>
        </dd>

        <dd className={styles.clear + " " + styles.dd}></dd>

        <dt className={styles.dt}>Hobbies</dt>
        <dd className={styles.dd}>
          World Domination, Deep Sea Diving, Murder Most Foul
        </dd>

        <dd className={styles.clear + " " + styles.dd}></dd>

        <dt className={styles.dt}>References</dt>
        <dd className={styles.dd}>Available on request</dd>

        <dd className={styles.clear}></dd>
      </dl>
      <div className={styles.clear}></div>
    </div>
  )
}
