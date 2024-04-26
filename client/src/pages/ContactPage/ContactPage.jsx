import styles from "./ContactPage.module.css";
import ServiceStyles from "../ServicesPage/ServicesPage.module.css";
function ContactPage() {
  return (
    <div className={ServiceStyles.PageContainer}>
      <h1>ติดต่อเรา</h1>
      <div className={styles.Map}>
        <iframe
          title="myMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.4747020141463!2d100.50403817563279!3d13.930317193134321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e28442ace7a45d%3A0x8bf5cadb4214ee6f!2z4Lio4Lij4Li14LiY4LiZ4Liy4Lin4Lix4LiS4LiZ4LmM!5e0!3m2!1sen!2sjp!4v1714030590838!5m2!1sen!2sjp"
          width="400"
          height="300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
