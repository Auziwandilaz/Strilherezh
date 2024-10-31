import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import Layout from "./src/app/layout"
import { LoadingScreen } from './src/app/ui/components/loading/LoadingScreen';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
(
    <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
    </Suspense>
);


//  * HOME PAGE
const Home = Loadable(lazy(() => import('./src/app/page')));

// * ACCOUNT PAGE
const Account = Loadable(lazy(() => import('./src/app/ui/components/account/AccountPage')));

const routes: RouteObject[] = [
    {
        path: '*',
        element: <Layout></Layout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                index: true,
                element: <Account></Account>
            }
        ]
    },
];

export default routes;