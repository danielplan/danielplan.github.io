import Head from 'next/head';
import styles from '@styles/pages/Blog.module.scss';
import Image from 'next/image';
import CalendarIcon from '/public/img/icons/calendar.svg';
import ClockIcon from '/public/img/icons/clock.svg';
import Tags from '@components/modules/Tags';
import MobileNavigation from '@components/layout/MobileNavigation';
import blogPosts, {BlogPost, getBlogPost} from '@content/collections/blog';
import MetaInfo from '@components/atoms/MetaInfo';
import {readFileSync} from 'fs';
import BreadCrumbs from '@components/atoms/BreadCrumbs';
import general from '@content/general';

interface Props {
  post: BlogPost;
}

const Post = ({post}: Props) => {
  const date = new Date(post.date);
  const dateString = date.toLocaleString('default', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  return (
    <>
      <Head>
        <MetaInfo {...post.meta} />
        <title>
          {post.meta.title} {general.titleSuffix}
        </title>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            name: post.title,
            author: {
              '@type': 'Person',
              name: 'Daniel Plan',
            },
            datePublished: dateString,
            dateModified: dateString,
            image: {
              '@type': 'ImageObject',
              url: `${general.baseUrl}/img/posts${post.previewImage}`,
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${general.baseUrl}/blog/${post.slug}`,
            },
            description: post.lead,
          })}
        </script>
        <BreadCrumbs
          breadcrumbs={[
            {
              path: '/blog',
              name: 'Blog',
            },
            {
              path: `/blog/${post.slug}`,
              name: post.title,
            },
          ]}
        />
      </Head>
      <main>
        <article>
          <div className="container header-padding">
            <header className={styles.hero}>
              <Tags tags={post.tags} />
              <h1>{post.title}</h1>
              <div className={styles.information}>
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
              </div>
            </header>
          </div>
          <div className={styles.image}>
            <Image
              src={post.previewImage}
              alt={post.previewImageAlt}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className={styles.main}>
            <div className={styles.container}>
              <p className={styles.lead}>{post.lead}</p>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{__html: post.body}}></div>
            </div>
          </div>
        </article>
      </main>
      <MobileNavigation
        back={{
          href: '/blog',
          label: 'Back to blog',
        }}
      />
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({params}: Params) {
  const post = getBlogPost(params.slug);

  return {
    props: {
      post: {
        ...post,
        body: readFileSync(
          `${process.cwd()}/content/collections/posts/${post.body}`,
          'utf8'
        ),
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
