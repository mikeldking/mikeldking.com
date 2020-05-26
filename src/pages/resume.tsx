import React from "react"
import styles from "./resume.module.css"

export default function Resume() {
  return (
    <div className="tailwind">
      <article className={styles.page}>
        <section className={styles.leftSide}>
          <header className={styles.header}>
            <h1>Mikel King</h1>
            <h2>Software Engineer</h2>
          </header>
          <section className="mx-6 mb-6">
            <header className={styles.sectionHeader}>Technologies</header>
            <p>
              <span className={styles.pill}>React</span>
              <span className={styles.pill}>Redux/Mobx</span>
              <span className={styles.pill}>GraphQL</span>
              <span className={styles.pill}>REST</span>
              <span className={styles.pill}>Koa/Express</span>
              <span className={styles.pill}>Docker/K8s</span>
              <span className={styles.pill}>Elasticsearch</span>
              <span className={styles.pill}>Kafka</span>
              <span className={styles.pill}>Vault</span>
              <span className={styles.pill}>Terraform</span>
              <span className={styles.pill}>Git</span>
              <span className={styles.pill}>State Machines</span>
              <span className={styles.pill}>RDF</span>
              <span className={styles.pill}>Web Assembly</span>
              <span className={styles.pill}>NGINX</span>
              <span className={styles.pill}>Authn/Authz</span>
            </p>
          </section>
          <section className="mx-6">
            <header className={styles.sectionHeader}>Skills</header>
            <ul className={styles.skillList + " mb-6"}>
              <li key="sw">
                <div className={styles.skill}>Software Design</div>
                <div className={styles.barWrap}>
                  <span className={styles.bar} style={{ width: "87%" }}></span>
                </div>
              </li>
              <li key="ui">
                <div className={styles.skill}>UI/UX Design</div>
                <div className={styles.barWrap}>
                  <span className={styles.bar} style={{ width: "93%" }}></span>
                </div>
              </li>
              <li key="data-viz">
                <div className={styles.skill}>Data Visualization</div>
                <div className={styles.barWrap}>
                  <span className={styles.bar} style={{ width: "80%" }}></span>
                </div>
              </li>
              <li key="ts">
                <div className={styles.skill}>Typescript/Javascript</div>
                <div className={styles.barWrap}>
                  <span className={styles.bar} style={{ width: "93%" }}></span>
                </div>
              </li>
              <li key="html">
                <div className={styles.skill}>HTML/CSS/SVG</div>
                <div className={styles.barWrap}>
                  <span className={styles.bar} style={{ width: "85%" }}></span>
                </div>
              </li>
              <li key="design">
                <div className={styles.skill}>Figma/Sketch/Adobe CS</div>
                <div className={styles.barWrap}>
                  <span className={styles.bar} style={{ width: "70%" }}></span>
                </div>
              </li>
              <li key="japanese">
                <div className={styles.skill}>Written and Spoken Japanese</div>
                <div className={styles.barWrap}>
                  <span className={styles.bar} style={{ width: "85%" }}></span>
                </div>
              </li>
            </ul>
            <div className={styles.contact}>
              <h3>Contact</h3>
              <p>
                <span className="block">720-938-2269</span>
                <a href="mailto:mikeldking@gmail.com">mikeldking@gmail.com</a>
              </p>
            </div>
          </section>
        </section>
        <section className={styles.rightSide}>
          <dl>
            <dt className={styles.dt}>About Me</dt>
            <dd className={styles.aboutMe}>
              I'm a full-stack engineer that is deeply passionate about UI/UX,
              the web, design, data visualization, and mobile SW development.
            </dd>
            <dt className={styles.dt}>Education</dt>
            <dd className={styles.dd}>
              <h3>
                University of Southern California
                <span>Summa Cum Laude - May 2008</span>
              </h3>
              <p className="divide-x divide-gray-500 text-sm mb-2">
                <span className="pr-2">
                  Computer Engineering and Computer Science
                </span>
                <span className="pl-2">3.94</span>
              </p>
              <h3>
                University of Colorado, Boulder
                <span>Masters - Incomplete</span>
              </h3>
              <p className="divide-x divide-gray-500 text-sm mb-6">
                <span className="pr-2">Human Computer Interaction</span>
                <span className="pl-2">4.0</span>
              </p>
            </dd>
            <dt className={styles.dt}>Experience</dt>
            <dd className={styles.dd}>
              <h2 className={styles.experienceHeader}>
                Engine ML <span>Software Engineer - 2019 to Now</span>
              </h2>
              <p className={styles.experienceDescription}>
                Creating next-generation distributed deep learning
                infrastructure and services. Engine empowers any ML team to be
                able to rapidly build state of the art models by leveraging
                GPU-enabled computation.
              </p>
              <ul className={styles.ul}>
                <li>
                  Built Engine's UI and API backend from the ground up. Sole
                  engineer designing and programming the UI and its
                  corresponding backends.
                </li>
                <li>
                  Re-architected the application to support collaborative
                  paradigms like teams and projects with proper access control.
                </li>
                <li>
                  Overhauled authentication and authorization to use OAuth 2.0
                  and JWTs
                </li>
                <li>
                  Migrated all APIs to GraphQL with proper authentication and
                  authorization.
                </li>
                <li>
                  Converted the UI to be live-updating using GraphQL
                  subscriptions
                </li>
              </ul>

              <h2 className={styles.experienceHeader}>
                Apple Inc. <span>Sr. Software Engineer - 2015 to 2019</span>
              </h2>
              <p className={styles.experienceDescription}>
                Full-stack developer using React, Redux/Mobx, Express/Koa,
                Kafka, THREE.js, Web Assembly, WebGL/GLSL, Elasticsearch, and
                Docker. Worked closely alongside operations, human interface
                design, and iOS engineers to ship and maintain iOS features.
              </p>

              <h2 className={styles.experienceHeader}>
                Fluke Networks <span>Software Engineer - 2008 to 2015</span>
              </h2>
              <p className={styles.experienceDescription}>
                Helped transform Fluke Networks' application and network
                monitoring business into a highly successful, award-winning
                product that was considered a cornerstone of Fluke Networks’
                success.
              </p>
              <ul className={styles.ul}>
                <li>
                  Created the first ever AANPM mobile app and a custom
                  communication protocol that allows TruView customers to
                  securely access their private data center data from outside of
                  their company's firewall.
                </li>
                <li>Pioneered the use of UCD within the company.</li>
              </ul>
              <h2 className={styles.experienceHeader}>
                Cisco Systems <span>Software College Intern - Summer 2007</span>
              </h2>
              <h2 className={styles.experienceHeader + " mb-6"}>
                Unavco Inc. <span>System Administrator - Summer 2006</span>
              </h2>
            </dd>

            <dt className={styles.dt}>Leadership</dt>
            <dd className={styles.dd}>
              <h2 className={styles.leadershipHeader}>
                ACM President <span>2006 to 2008</span>
              </h2>
            </dd>
            <dd className={styles.dd}>
              <h2 className={styles.leadershipHeader}>
                Odell Technology Award <span>2012</span>
              </h2>
            </dd>
            <dd className={styles.dd}>
              <h2 className={styles.leadershipHeader}>
                Outstanding Student Award in CE/CS
                <span>2008</span>
              </h2>
            </dd>
          </dl>
        </section>
      </article>
    </div>
  )
}
