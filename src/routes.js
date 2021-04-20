import Hospital from 'pages/Hospital'
import Personal from 'pages/Personal'

const Routes = [
    {
        path: '/',
        component: Hospital,
        exact: true
    },
    {
        path: '/Personal',
        component: Personal,
    }
]
export default Routes