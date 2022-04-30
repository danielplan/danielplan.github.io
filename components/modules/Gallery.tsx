import styles from "@styles/modules/Gallery.module.scss";
import Image from "next/image";

interface Props {
    images: string[];
    video: string | null;
}

const Gallery = ({
                     images,
                     video,
                 }: Props): JSX.Element => {
    return (
        <section className={styles.module}>
            <div className="container">
                <div className={styles.inner}>
                    {video && (
                        <div className={styles.video}>
                            <video src={video} muted autoPlay loop={true}></video>
                        </div>
                    )}
                    <div className={styles.grid}>
                        {
                            images.map((image, i) => (
                                <div key={i} className={styles.item + " " + styles['item-' + i]}>
                                    <Image src={image} alt="" layout="fill" objectFit="cover"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
