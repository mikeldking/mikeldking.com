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
            University of Southern California <span>B.E. - 2008</span>
          </h2>
          <p className={styles.p}>
            <strong>Major:</strong> Computer Engineering and Computer Science
            <br />
            <strong>GPA:</strong> 3.94
          </p>
          <h2 className={styles.h2}>
            University of Colorado, Boulder <span>Masters - Incomplete</span>
          </h2>
          <p className={styles.p}>
            <strong>Major:</strong> Human Computer Interaction
            <br />
            <strong>GPA:</strong> 4.0
          </p>
        </dd>

        <dd className={styles.clear + " " + styles.dd}></dd>
        <dt className={styles.dt}>Skills</dt>
        <dd className={styles.dd}>
          <h2 className={styles.h2}>Engineering</h2>
          <p className={styles.p}>
            Software Design, UI/UX, Javascript/Typescript, Any flavor of CSS,
            HTML, SVG
          </p>
          <h2 className={styles.h2}>Computer skills</h2>
          <p className={styles.p}>
            Comfotable desgining things with Figma, Adobe Creative Suite, and
            Sketch
          </p>
        </dd>

        <dd className={styles.clear + " " + styles.dd}></dd>
        <dt className={styles.dt}>Experience</dt>
        <dd className={styles.dd}>
          <h2 className={styles.h2}>
            Engine ML <span>Software Engineer - 2019 to Now</span>
          </h2>
          <ul className={styles.ul}>
            <li>
              Creating next-generation distributed deep learning infrastructure
              and services to support ML engineers. Engine ML empowers any ML
              team to be able to rapidly build state of th art models by
              leveraging GPU-enabled computation.
            </li>
            <li>
              Built Engine ML's UI and application backend from the ground up
              using modern best practices. The sole engineer designing and
              working on the UI and it's corresponding backends.
            </li>
            <li>
              Rearchitected the application to support collaborative paradigms
              like teams and projects with proper access control. Added support
              for user and team slugs to enable intuitive URLs and navigation.
            </li>
            <li>
              Overhauled Engine ML's authenticaion and authorization. Refactored
              the application to use OAuth 2.0 and secured Engine ML's CLI using
              JWTs with corresponding permissions.
            </li>
            <li>
              Migrated all of Engine ML's APIs to GraphQL with proper
              authentication and authorization. Migrated the UI from being REST
              based to GraphQL.
            </li>
            <li>
              Converted the UI to be fully live-updating with the careful use of
              GraphQL subscriptions and polling
            </li>
            <li>
              Crafted various custom components to support various use-cases.
              These included a live log viewer with ANSI character highlighting,
              a file brower, top-level application search with hot-key support,
              code snippets with syntax highlighting, and many more.
            </li>
            <li>
              <strong>Technologies:</strong> Kubernetes, Terraform, GraphQL,
              PostGres, Elasticsearch, Prometheus, Nginx, Git
            </li>
            <li>
              <strong>Languages:</strong> Typescript, Haskell, Kotlin, Python
            </li>
            <li>
              <strong>Libraries:</strong> React, Jest, Apollo, Koa
            </li>
          </ul>

          <h2 className={styles.h2}>
            Apple Inc. <span>Sr. Software Engineer - 2015 to 2019</span>
          </h2>
          <ul className={styles.ul}>
            <li>
              Full-stack web application development using React, Redux/Mobx,
              Express/Koa, THREE.js, Web Assembly, WebGL/GLSL, Elasticsearch,
              and Docker
            </li>
            <li>
              Worked closely alongside operations, human interface design, and
              iOS engineers to ship and maintain iOS features.
            </li>
          </ul>
          <h2 className={styles.h2}>
            Fluke Networks <span>Software Engineer - 2008 to 2015</span>
          </h2>
          <ul className={styles.ul}>
            <li>
              UI engineer in a small but highly versatile engineering team that
              worked on Visual TruView, an industry leading application and
              network performance monitoring tool. After joining the team, the
              product was transformed from being a struggling business venture
              for Fluke Networks into a highly successful, award-winning product
              that was considered a cornerstone of Fluke Networks’ success.
            </li>
            <li>
              Designed and programmed various features and user experience
              improvements that resulted in an industry-leading UI according to
              Gartner Research (2 years in a row).
            </li>
            <li>
              Created the first ever AANPM mobile app. Was the sole engineer
              responsible for this project: designed, architected, and
              implemented the application from the ground up. I created a custom
              communication protocol that allows TruView customers to securely
              access their private data center data from outside of their
              company's firewall. Technologies used include: Node, PubNub,
              Sencha Touch, D3, CSS animations, Parse.js, Cordova, and Crypto
              JS.
            </li>
            <li>
              Pioneered the use of user-centered design principles and practices
              within the company.
            </li>
            <li>
              Fulfilled a variety of roles that include UI programmer, designer,
              software architect, NodeJS developer, recruiter, UX consultant,
              and mobile technology consultant.
            </li>
          </ul>
          <h2 className={styles.h2}>
            Cisco Systems <span>Software College Intern - Summer 2007</span>
          </h2>
          <h2 className={styles.h2}>
            Unavco Inc. <span>System Administrator - Summer 2006</span>
          </h2>
        </dd>

        <dd className={styles.clear + " " + styles.dd}></dd>

        <dt className={styles.dt}>Leadership</dt>
        <dd className={styles.dd}>
          <h2 className={styles.h2}>
            ACM President <span>2006 to 2008</span>
          </h2>
          <ul className={styles.ul}>
            <li>
              Coordinated the logistics for a code-a-thon for handicapped
              computer users and organized engineering events, lectures, and
              tutoring sessions
            </li>
          </ul>
        </dd>
        <dd className={styles.dd}>
          <h2 className={styles.h2}>
            Odell Technology Award <span>2012</span>
          </h2>
          <ul>
            <li>
              for demonstrating a passion for technology and having an
              innovative spirit
            </li>
          </ul>
        </dd>
        <dd className={styles.dd}>
          <h2 className={styles.h2}>College Honors</h2>
          <ul>
            <li>
              Upsilon Phi Epsilon (Computer Science Honors Society), Tau Beta Pi
              Delta (Engineering Honors Society), Epsilon Kappa Nu (Electrical
              and Computer Engineering Honors Society), Phi Kappa Phi (Nation's
              oldest, largest, and most selective all-discipline honor society),
              Alpha Lambda Delta (National Academic Honors Society for freshman)
            </li>
          </ul>
        </dd>
        <dt className={styles.dt}>Hobbies</dt>
        <dd className={styles.dd}>
          I enjoy rock climbing, snowboarding, biking, surfing woodwork, and
          printmaking.
        </dd>

        <dd className={styles.clear + " " + styles.dd}></dd>
        <dd className={styles.clear}></dd>
      </dl>
      <div className={styles.clear}></div>
    </div>
  )
}
