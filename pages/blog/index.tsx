import { FC } from 'react';
import { wrapper } from '../../src/redux/store';
import { contentfulClient } from '../../src/api/contentfulClient';
import { Entry, RichTextContent, Asset } from 'contentful';
import Link from 'next/link';

interface Blog {
    title: string;
    slug: string;
    textarea: RichTextContent;
    media: Asset;
}

type Props = {
    items: Entry<Blog>[];
}

const Contact: FC<Props> = ({items}) => {    
    return (
        <>
            <h1>Blog</h1>
            {items.map((item) => (
                <div key={item.fields.slug}>
                    <h2>
                        <Link href={`/blog/${item.fields.slug}`}>
                            <a>{item.fields.title}</a>
                        </Link>
                    </h2>
                </div>
            ))}
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    async () => {
        const client = contentfulClient();
        const entries = await client.getEntries();

        return {
            props: {
                items: entries.items
            }
        };
    }
)

export default Contact;
