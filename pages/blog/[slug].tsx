import { Asset, ContentfulCollection } from 'contentful';
import { FC } from 'react';
import { contentfulClient } from '../../src/api/contentfulClient';
import { wrapper } from '../../src/redux/store';
import Image from 'next/image'

type Props = {
    items: Asset[]
}

const Article: FC<Props> = ({items}) => {
    return (
        <>
            <h1>Article</h1>
            {JSON.stringify(items)}
        </>
    )
};

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
);

export default Article;
