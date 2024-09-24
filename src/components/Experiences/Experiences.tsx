import { ConstrainedTitle } from "@/components/SectionTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "./Experiences.module.css";
import Image from "next/image";

const Experiences: React.FC = () => {
  return (
    <div className={styles.experiences}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Experiences</ConstrainedTitle>
        <div className={styles.items}>
          <div className={styles.timeline}/>

          <div className={styles.item}>
            <Image
                height={100}
                width={100}
                className={styles.image}
                src="/images/aruba.jpeg"
                alt="Aruba Networks"
            ></Image>
            <div className={styles.connector}/>
            <div className={styles.infos}>
              <div className={styles.bullet}>
                <div className={styles.dotPrimary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <Image
                      className={styles.mobileImage}
                      height={100}
                      width={100}
                      src="/images/aruba.jpeg"
                      alt="Aruba Networks"
                  ></Image>
                  <p className={styles.time}>Nov 2023 – Jan 2024</p>
                  <h4 className={styles.company}>Accenture Solutions Pvt. Ltd., Mumbai (India)</h4>
                  <h4 className={styles.role}>Application Development lead (Senior Data Engineer)</h4>
                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Led a team of 5 developers to implement coding standards, reducing project delays by 30%; collaborated with
                      architects to design scalable software solutions, and oversaw testing and code reviews, enhancing application
                      reliability and achieving on-time project milestones.<br/>
                  </p>
                </div>
              </div>
              <div className={styles.bullet}>
                <div className={styles.dotSecondary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <p className={styles.time}>Dec 2021 – Oct 2023</p>
                  <h4 className={styles.role}>Application Development Senior Analyst (Data Engineer)</h4>
                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Resolved complex technical issues by collaborating with development teams and stakeholders, successfully migrating
                      extensive data codes from Microsoft SQL Server to Big Query on Google Cloud Platform resulting in reduction of cost
                      by 34%<br/><br/>
                    ⦿ &nbsp; &nbsp; Automated data pipelines by creating Airflow DAGs in Pyspark and Python, streamlining data flow and reducing
                      manual processing time by over 80%<br/><br/>
                    ⦿ &nbsp; &nbsp; Optimized data architecture by eliminating redundant datasets and consolidating code during Big Query migration,
                    enhancing efficiency by 20%<br/><br/>
                    ⦿ &nbsp; &nbsp; Integrated backend code for data extraction and developed Power BI visualizations, improving data accessibility<br/><br/>
                    ⦿ &nbsp; &nbsp; Provided guidance on debugging and troubleshooting in production environments, ensuring system stability<br/><br/>
                    ⦿ &nbsp; &nbsp; Led team through multiple sprints, focusing on critical user stories and optimizing code for timely deliverables<br/><br/>
                    ⦿ &nbsp; &nbsp; Facilitated knowledge transfer through comprehensive documentation and training sessions, promoting team skill
                    development<br/><br/>
                    ⦿ &nbsp; &nbsp; Collaborated with business analysts, end-users, and stakeholders to gather requirements and develop effective
                    technical solutions<br/>
                  </p>
                </div>
              </div>

              <div className={styles.bullet}>
                <div className={styles.dotSecondary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <p className={styles.time}>Jun 2020 – Nov 2021</p>
                  <h4 className={styles.role}>Application Development Analyst</h4>

                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Identified and mitigated potential risks in the development process, proactively addressing issues to maintain project
                    timelines and deliverables<br/><br/>
                    ⦿ &nbsp; &nbsp; Developed advanced SQL queries and stored procedures for data reporting, performing detailed database analysis to
                    apply appropriate business data filters<br/><br/>
                    ⦿ &nbsp; &nbsp; Built ETL pipelines to migrate data from diverse sources to destination databases using SSIS packages, enhancing data
                    integration and cutting data processing time by over 20%<br/><br/>
                    ⦿ &nbsp; &nbsp; Optimized and tuned SQL queries for improved performance<br/>
                  </p>
                </div>
              </div>

              <div className={styles.bullet}>
                <div className={styles.dotSecondary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <p className={styles.time}>Apr 2018 – May2020</p>
                  <h4 className={styles.role}>Application Development Associate</h4>

                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Developed complex SQL queries to update, maintain, and debug the Opportunity Tracker application, supporting
                    solution management and approval processes<br/><br/>
                    ⦿ &nbsp; &nbsp; Documented application development processes, including design documents, coding standards, and technical
                    specifications<br/><br/>
                    ⦿ &nbsp; &nbsp; Collaborated with teams to upgrade data lake servers, minimizing disruptions and ensuring a smooth transition by
                    evaluating compatibility and dependencies<br/>
                  </p>
                </div>
              </div>

              

            </div>
          </div>
          <div className={styles.item}>
            <Image
                className={styles.image}
                height={100}
                width={100}
                src="/images/stylumia.jpeg"
                alt="Stylumia"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <Image
                  className={styles.mobileImage}
                  height={100}
                  width={100}
                  src="/images/stylumia.jpeg"
                  alt="Stylumia"
              />
              <p className={styles.time}>Sep 2016 – May 2018</p>
              <h4 className={styles.company}>ORGANIZATION EXPERIENCE</h4>
              <h4 className={styles.role}>
              National Service Scheme (NSS), KIIT University (India), Member
              </h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Executed a comprehensive survey across multiple villages near Bhubaneswar to collect data on educational levels and
                school attendance among children<br/><br/>
                ⦿ &nbsp; &nbsp; Analyzed survey data to identify areas with low educational enrollment and developed a targeted action plan for
                community outreach<br/><br/>
                ⦿ &nbsp; &nbsp; Coordinated with team members to visit identified villages, promote the importance of education, and provide
                educational resources and support to local students<br/>
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Experiences;
