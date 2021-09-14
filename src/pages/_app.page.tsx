import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../store/store';

import { ConfigProvider as AntDesignConfigProvider } from 'antd';
import ptBr from 'antd/lib/locale/pt_BR';
import 'antd/dist/antd.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <AntDesignConfigProvider locale={ptBr}>
            <ReduxProvider store={store}>
                <Component {...pageProps} />
            </ReduxProvider>
        </AntDesignConfigProvider>
    );
};

export default App;
