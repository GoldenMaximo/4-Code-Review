import { PageTitleAndDescription } from '../components';
import { Illustration } from '../components/Illustration';

const texts = Object.freeze({
    a: 'No internet connection',
    b: 'You are offline. Check your connection.',
});

const OfflinePage = () => (
    <>
        <PageTitleAndDescription pageTitle={texts.a} pageDescription={texts.a} />
        <Illustration description={texts.b} fileName="offline" />
    </>
);

export default OfflinePage;
