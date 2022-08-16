import styles from "@styles/modules/BlogPost.module.scss";
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
}

const BlogPostLarge = ({ post }: Props): JSX.Element => {
  return (
    <section className={styles.module + " " + styles.large}>
      <div className="container">
        <Link href={`/blog/${post.slug}`}>
          <a className={styles.inner + " clickable"}>
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
              <div className={styles.text}>
                {post.lead.substring(0, 200)}...
              </div>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default BlogPostLarge;
