import styles from "@styles/modules/ReferenceDetail.module.scss";
import Image from "next/image";

interface DetailItem {
    name: string;
    description: string;
    icon: string;
}

interface Props {
    details: DetailItem[]
}


const Gallery = ({
                     details,
                 }: Props): JSX.Element => {
    return (
        <section className={styles.module}>
            <div className="container">
                <div className={styles.inner}>
                    {details.map((detail) => (
                        <div key={detail.name} className={styles.item}>
                            <Image width={64} height={64} objectFit="contain" src={detail.icon} alt=""/>
                            <h3 className={styles.title}>{detail.name}</h3>
                            <div className={styles.text}>{detail.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
