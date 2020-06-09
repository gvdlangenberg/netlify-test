import '../src/scss/app.scss';
import { wrapper } from '../src/redux/store';
import Navigation from '../src/components/navigation';

function App({ Component, pageProps }) {
    return (
        <>
            <Navigation />
            <main className="content">
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default wrapper.withRedux(App);
