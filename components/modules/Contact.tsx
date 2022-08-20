import ContactCard from '@components/atoms/ContactCard';
import content from '@content/pages/contact';
import styles from '@styles/modules/Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.module}>
      {content.contactOptions.map((item, i) => (
        <div className={styles.item} key={i}>
          <ContactCard {...item} />
        </div>
      ))}
    </section>
  );
};

export default Contact;
