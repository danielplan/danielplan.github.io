import Head from 'next/head';
import styles from '@styles/pages/Blog.module.scss';
import Title from '@components/modules/Title';
import BlogPostPreview from '@components/modules/BlogPostPreview';
import MobileNavigation from '@components/layout/MobileNavigation';
import blogPosts, {BlogPost} from '@content/collections/blog';
import MetaInfo from '@components/atoms/MetaInfo';
import content from '@content/pages/blog';

interface Props {
  posts: BlogPost[];
}

const Blog = ({posts}: Props) => {
  console.log(posts);

  return (
    <>
      <Head>
        <MetaInfo {...content.meta} />
      </Head>
      <main className={styles.main}>
        <Title
          smallHeading={content.titleSmall}
          largeHeadingColor={content.titleBig}
        />
        <div className="margin-large-top container">
          <div className={styles['blog-grid']}>
            {posts[0] && (
              <div className={styles['blog-item-large']}>
                <BlogPostPreview post={posts[0]} large />
              </div>
            )}
            {posts.slice(1).map((post) => (
              <div className={styles['blog-item']} key={post.slug}>
                <BlogPostPreview post={post} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <MobileNavigation />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {posts: blogPosts},
  };
}

export default Blog;
