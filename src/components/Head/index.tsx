import { memo } from 'react';
import Head from 'next/head';

const PageTitleAndDescriptionComponent = ({
    pageTitle,
    pageDescription,
}: {
    pageTitle: string;
    pageDescription: string;
}) => {
    // useMemo is unnecessary here as the component
    // is already memoized and re-renders only on prop changes
    const texts = Object.freeze({
        a: pageTitle + ' - 4-Code-Review',
    });

    return (
        <Head>
            <title>{texts.a}</title>
            <meta name="theme-color" content="#001529" />
            <meta name="description" content={pageDescription} />
            <meta property="og:title" content={texts.a} />
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/images/icons/logo-192.png" />
        </Head>
    );
};

// TODO: I'm still not sure if this memo should be here, it adds an extra comparison
// I.e.: props, old vs new, instead of the common vdom straight up re-render
// It might be unnecessary because it's parent is not going to re-render often
// And this component is really light with very little HTML, further performance
// measures must be taken.
// As of right now, memo will do. If there's any performance impact it's negligeable.
export const PageTitleAndDescription = memo(PageTitleAndDescriptionComponent);
