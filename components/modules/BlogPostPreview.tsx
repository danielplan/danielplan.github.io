import styles from "@styles/modules/BlogPost.module.scss";
import Image from "next/image";
import Link from "next/link";
import { TaggedPost } from "@pages/blog";
import CalendarIcon from "/public/img/icons/calendar.svg";
import ClockIcon from "/public/img/icons/clock.svg";
import Tags from "./Tags";
import SlideIn from "@components/animations/SlideIn";

interface Props {
  post: TaggedPost;
  large?: boolean;
}

const BlogPostPreview = ({ post, large }: Props): JSX.Element => {
  const previewTextLength = large ? 200 : 100;
  const previewText =
    post.lead.length > previewTextLength
      ? post.lead.substring(
          0,
          post.lead.substring(0, previewTextLength).lastIndexOf(" ")
        ) + "..."
      : post.lead;
  const date = new Date(post.createDate);
  const dateString = date.toLocaleString("default", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <section
      className={styles.module + " clickable " + (large ? styles.large : "")}
    >
      <Link href={`/blog/${post.slug}`} passHref>
        <a className={styles.inner}>
          <SlideIn>
            <div className={styles.image}>
              <div className={styles.information}>
                <SlideIn direction="down">
                  <div className={styles.tag}>
                    <div className={styles.icon}>
                      <Image
                        src={CalendarIcon}
                        width={16}
                        height={16}
                        alt="Calendar Icon"
                      />
                    </div>
                    {dateString}
                  </div>
                </SlideIn>
                <SlideIn direction="down" delay={300}>
                  <div className={styles.tag}>
                    <div className={styles.icon}>
                      <Image
                        src={ClockIcon}
                        width={16}
                        height={16}
                        alt="Clock Icon"
                      />
                    </div>
                    {post.readTime} min to read
                  </div>
                </SlideIn>
              </div>
              <Image
                src={post.previewImage}
                alt=""
                objectFit="cover"
                layout="fill"
              />
            </div>
          </SlideIn>
          <div className={styles.content}>
            <Tags blogTags={post.tags} />
            <SlideIn delay={200}>
              <h2>{post.name}</h2>
            </SlideIn>
            <SlideIn delay={400}>
              <div className={styles.text}>{previewText}</div>
            </SlideIn>
          </div>
        </a>
      </Link>
    </section>
  );
};

export default BlogPostPreview;
