import Head from "next/head";
import styles from "@styles/pages/Portfolio.module.scss";
import Title from "@components/modules/Title";
import {Post, PrismaClient} from "@prisma/client";
import BlogPostLarge from "@components/modules/BlogPostLarge";
import BlogPostSmall from "@components/modules/BlogPostSmall";

interface Props {
    posts: Post[];
}

const Blog = ({posts}: Props) => {
    return (
        <>
            <Head>
                <title>Portfolio - daniel plan</title>
                <meta name="description" content="Generated by create next app"/>
            </Head>
            <main className={styles.main}>
                <Title
                    smallHeading="This is"
                    largeHeadingWhite="my"
                    largeHeadingColor="Blog"
                />
                {posts && posts[0] && <BlogPostLarge post={posts[0]}/>}
                <div className="margin-large-top container">
                    <div className="three-cols-grid">
                        {posts.slice(1).map((post) => (
                            <div className="column" key={post.id}>
                                <BlogPostSmall post={post}/>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export async function getStaticProps() {
    const prisma = new PrismaClient();
    const posts = await prisma.post.findMany({
        orderBy: {
            create_date: "desc",
        },
    });

    return {
        props: {posts},
    };
}

export default Blog;
