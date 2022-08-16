import styles from "@styles/modules/BlogPost.module.scss";
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
}

const BlogPostSmall = ({ post }: Props): JSX.Element => {
  const date = new Date(post.createDate);
  return (
    <section className={styles.module + " " + styles.small}>
      <Link href={`/blog/${post.slug}`}>
        <a className={`${styles["small-inner"]} clickable`}>
          <div className={styles.image}>
            <Image
              src={post.previewImage}
              alt=""
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className={styles.content}>
            <h2>{post.name}</h2>
          </div>
          <div className={styles.year}>
            {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
          </div>
        </a>
      </Link>
    </section>
  );
};

export default BlogPostSmall;
