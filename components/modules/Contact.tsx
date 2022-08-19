import ContactCard from "@components/atoms/ContactCard";
import styles from "@styles/modules/Contact.module.scss";

const contactOptions = [
  {
    label: "Instagram",
    icon: "instagram.svg",
    value: "@plandaniel",
    url: "https://www.instagram.com/plandaniel/",
    background:
      "radial-gradient(circle farthest-corner at 32% 106%, rgb(255, 225, 125) 0%, rgb(255, 205, 105) 10%, rgb(250, 145, 55) 28%, rgb(235, 65, 65) 42%, transparent 82%), linear-gradient(135deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%)",
  },
  {
    label: "Github",
    icon: "github.svg",
    value: "danielplan",
    url: "https://github.com/danielplan",
    background: "#333",
  },
  {
    label: "LinkedIn",
    icon: "linkedin.svg",
    value: "Daniel Planötscher",
    url: "https://www.linkedin.com/in/daniel-plan%C3%B6tscher-0268091a7/",
    background: "#0077b5",
  },
  {
    label: "Twitter",
    icon: "twitter.svg",
    value: "@danielplan_",
    url: "https://twitter.com/danielplan_",
    background: "#1da1f2",
  },
  {
    label: "TikTok",
    icon: "tiktok.svg",
    value: "@planiel",
    url: "https://www.tiktok.com/@planiel",
    background: "#000",
  },
  {
    label: "unsplash",
    icon: "unsplash.svg",
    value: "@planiel",
    url: "https://unsplash.com/@planiel",
    background: "#000",
  },
  {
    label: "500px",
    icon: "500px.svg",
    value: "@planiel",
    url: "https://500px.com/planiel",
    background: "#000",
  },
];

const Contact = () => {
  return (
    <section className={styles.module}>
      {contactOptions.map((item, i) => (
        <div className={styles.item} key={i}>
          <ContactCard {...item} />
        </div>
      ))}
    </section>
  );
};

export default Contact;
