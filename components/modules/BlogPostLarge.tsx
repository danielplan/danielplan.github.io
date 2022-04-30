import styles from "@styles/modules/BlogPost.module.scss";
import SlideIn from "@components/animations/SlideIn";
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
}

const BlogPostLarge = ({ post }: Props): JSX.Element => {
  return (
    <section className={styles.module}>
      <div className="container">
        <Link href={`/blog/${post.slug}`}>
          <a className={styles.inner + " clickable"}>
            <div className={styles.content}>
              <SlideIn>
                <h2>{post.name}</h2>
              </SlideIn>
              <SlideIn>
                <div className={styles.categories}>{}</div>
              </SlideIn>
            </div>
            <div className={styles.top}>
              <SlideIn direction="down">
                <div className={styles.year}>
                  {new Date(post.create_date).getFullYear()}
                </div>
              </SlideIn>
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

export default BlogPostLarge;