import '../styles/resume.css';
import { MailSvg, PhoneSvg, AddressSvg } from './icons';

const EducationItem = function({ eduDetail }) {
    return (
        <div className="education-item">
            <b><p style={{ marginBottom : "4px" }}>{eduDetail.startDate} - {eduDetail.endDate}</p></b>
            <b><p style={{ marginBottom : "8px" }}>{eduDetail.school}</p></b>
            <p style={{ marginBottom : "4px" }}>{eduDetail.degree}</p>
            <p>Grade: {eduDetail.grade}</p>
        </div>
    );
};

const ContactItem = function({ mail, tel, address }) {
    return (
        <>
            { mail
                ? <div className="contact-item">
                    <MailSvg width="24px" height="24px" className="resume-icon" />
                    <p>{mail}</p>
                  </div>
                : null
            }
            { tel
                ? <div className="contact-item">
                    <PhoneSvg width="24px" height="24px" className="resume-icon" />
                    <p>{tel}</p>
                  </div>
                : null
            }
            { address
                ? <div className="contact-item">
                    <AddressSvg width="24px" height="24px" className="resume-icon" />
                    <p>{address}</p>
                  </div>
                : null
            }
        </>
    );
};

const ExperienceItem = function({ expDetail }) {
    return (
        <div className="experience-item">
            <b><p style={{ marginBottom : "4px" }}>{expDetail.startDate} - {expDetail.endDate}</p></b>
            <b><p style={{ marginBottom : "8px" }}>{expDetail.title} - {expDetail.company}</p></b>
            <p>{expDetail.description}</p>
        </div>
    );
};

const Resume = function({ personal, education, experience }) {
    return (
        <section className="resume">
            <header>
                <div className="ellipse-styler">
                    <h1>{personal.fullName}</h1>
                    <p>{personal.profile}</p>
                </div>
            </header>
            <div className="left">
                <section className="resume-education">
                    <h2>Education</h2>
                    { education.map(detail => <EducationItem eduDetail={detail} key={detail.id} />) }
                </section>
                <section className="resume-contact">
                    <h2>Contact</h2>
                    <ContactItem mail={personal.email} tel={personal.contact} address={personal.address} />
                </section>
            </div>
            <section className="resume-experience">
                <h2>Work Experience</h2>
                { experience.map(detail => <ExperienceItem expDetail={detail} key={detail.id} /> )}
            </section>
        </section>
    );
};

export default Resume;