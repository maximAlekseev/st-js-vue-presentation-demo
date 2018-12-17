import Home from '../components/Home'
import DataDeclaration from '../components/DataDeclaration'
import RecursiveTitle from '../components/RecursiveTitle'
import Templates from '../components/Templates'

export default [
    { path: '/', component: Home },
    { path: '/data', component: DataDeclaration },
    { path: '/recursive', component: RecursiveTitle },
    { path: '/templates', component: Templates }
]