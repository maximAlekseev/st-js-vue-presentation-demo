import Home from '../components/Home'
import DataDeclaration from '../components/DataDeclaration'
import RecursiveTitle from '../components/RecursiveTitle'
import Templates from '../components/Templates'
import Components from '../components/Components'
import ComponentInDepth from '../components/ComponentInDepth'
import ComponentsCommunication from '../components/communication/ComponentsCommunication'

export default [
    { path: '/', component: Home },
    { path: '/data', component: DataDeclaration },
    { path: '/recursive', component: RecursiveTitle },
    { path: '/templates', component: Templates },
    { path: '/components', component: Components },
    { path: '/component-in-depth', component: ComponentInDepth },
    { path: '/communication', component: ComponentsCommunication }
]