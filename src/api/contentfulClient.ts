import { createClient } from 'contentful';

export function contentfulClient() {
    return createClient({
        space: 't45ikvt8payp',
        accessToken: '6e9ad85e9eb243876b25f1279f73402e8fb09a94069ca83fe349a6b09e75bf30'
    });
}
