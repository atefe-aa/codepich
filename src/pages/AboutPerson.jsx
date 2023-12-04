import { Link, Navigate, useParams } from "react-router-dom";
import { teamMembersData } from "../utils/consts";
import styles from "../styles/AboutPerson.module.css";

function AboutPerson() {
  const { name } = useParams();
  const data = teamMembersData[name];

  if (!data) return <Navigate to="/404" replace />;
  
  return (
    <section className={`overflow-x-hidden ${styles.bg_about_person}`}>
      <div className={`container mt-5 ${styles.person_ability}`}>
        <div className="row">
          <div className="col-12 col-md-3 p-2 mb-4">
            <div className="rounded p-4">
              <div className="mb-4">
                <div className="d-flex justify-content-center name">
                  {data.name}
                </div>
                <div className="job d-flex justify-content-center">
                  {data.jobTitle}
                </div>
              </div>
            </div>
            <div
              className={`rounded p-4 mt-5 ${styles.glass_bg_2} ${styles.aboutDiv}`}
            >
              <div className={styles.personPicture}>
                <img src={data.picture} alt={`${data.name}'s picture`} />
              </div>
              <div className="mt-5">
                <b>درباره من:</b>
                <p className="my-3">{data.about}</p>
              </div>
            </div>

            <div className={`rounded-5 p-2 mt-4  ${styles.glass_bg_2}`}>
              <img src="/assets/img/phone.svg" alt="phone" className="w-10" />
              <span className="ms-2">{data.phone} </span>
            </div>
            <div className={`rounded-5 p-2 mt-4  ${styles.glass_bg_2}`}>
              <img src="/assets/img/linkdin.svg" alt="phone" className="w-10" />
              <Link to={data.linkedIn} className="ms-2">
                لینکدین
              </Link>
            </div>
            <div className={`rounded-5 p-2 mt-4 ${styles.glass_bg_2}`}>
              <img
                src="/assets/img/instagram.svg"
                alt="phone"
                className="w-10"
              />
              <Link to={data.instagram} className="ms-2">
                اینستاگرام
              </Link>
            </div>
            <div className={`rounded-5 p-2 mt-4  ${styles.glass_bg_2}`}>
              <img
                src="/assets/img/telegram.svg"
                alt="phone"
                className="w-10"
              />
              <Link to={data.telegram} className="ms-2">
                تلگرام
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-9 p-2">
            <div
              className="rounded p-4 position-relative"
              style={{ background: "rgba(214, 214, 214, 0.95)" }}
            >
              <div className="education">
                <div className={styles.titleBox}>
                  <h6
                    className={`p-2 rounded-3 d-inline ${styles.ability_title}`}
                  >
                    تحصیلات
                  </h6>
                  <div className={styles.hrLine}></div>
                </div>
                <div className={styles.ability_person}>
                  {data.educations.map((edu) => (
                    <div key={edu.title}>
                      <h6>{edu.title}</h6>
                      <p>{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sabeghe">
                <div className={styles.titleBox}>
                  <h6
                    className={`p-2 rounded-3 d-inline ${styles.ability_title}`}
                  >
                    سابقه کاری
                  </h6>
                  <div className={styles.hrLine}></div>
                </div>
                <div className={styles.ability_person}>
                  {data.experiments.map((exp) => (
                    <div key={exp.title}>
                      <h6>{exp.title}</h6>
                      <div>
                        <span>{exp.toDate}</span>-<span>{exp.fromDate}</span>
                      </div>
                      <p>{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="my-skill">
                <div className={styles.titleBox}>
                  <h6
                    className={`p-2 rounded-3 d-inline ${styles.ability_title}`}
                  >
                    مهارت های من
                  </h6>
                  <div className={styles.hrLine}></div>
                </div>
                <div className={`${styles.skills}`}>
                  {data.skills.map((skill) => (
                    <div className={styles.svgDiv} key={skill.title}>
                      <svg className={styles.svg}>
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#693194"
                          strokeWidth="10"
                          fill="none"
                          strokeDasharray={(
                            2 *
                            Math.PI *
                            40 *
                            (skill.percentage / 100)
                          ).toFixed(2)}
                          transform="rotate(-90 50 50)" // Rotate the circle to start from the top (0 degrees)
                          className={styles.bigCircle}
                        />
                        <circle
                          cx="50"
                          cy="30"
                          r="25"
                          stroke="#693194"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={(
                            2 *
                            Math.PI *
                            30 *
                            (skill.percentage / 100)
                          ).toFixed(2)}
                          transform="rotate(-90 50 50)" // Rotate the circle to start from the top (0 degrees)
                          className={styles.smallCircle}
                        />
                        <image
                          x="24%"
                          y="25%"
                          xlinkHref={skill.logo}
                          className={styles.logo}
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              <div className="alayegh">
                <div className={styles.titleBox}>
                  <h6
                    className={`p-2 rounded-3 d-inline ${styles.ability_title}`}
                  >
                    علایق من
                  </h6>
                  <div className={styles.hrLine}></div>
                </div>
                <div
                  className={styles.ability_person}
                  style={{ minHeight: "200px" }}
                >
                  {data.interests.map((exp) => (
                    <div key={exp}>
                      <h5>{exp}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPerson;
