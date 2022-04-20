import styles from "@styles/modules/Reference.module.scss";
import SlideIn from "@components/animations/SlideIn";
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
}

const BlogPostSmall = ({ post }: Props): JSX.Element => {
  return (
    <section className={styles.module}>
      <div className="container">
        <Link href={`/blog/${post.slug}`}>
          <a className={`${styles["small-inner"]} clickable`}>
            <div className={styles.content}>
              <h2>{post.name}</h2>
            </div>
            <div className={styles.top}>
              <div className={styles.year}>
                {new Date(post.create_date).getFullYear()}
              </div>
            </div>
            <div className={styles.background}>
              <Image
                src={post.preview_image}
                alt=""
                objectFit="cover"
                layout="fill"
              />
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default BlogPostSmall;
