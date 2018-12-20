import Home from '../components/Home'
import DataDeclaration from '../components/DataDeclaration'
import RecursiveTitle from '../components/RecursiveTitle'
import Templates from '../components/Templates'
import Components from '../components/Components'
import ComponentInDepth from '../components/ComponentInDepth'
import ComponentsCommunication from '../components/communication/ComponentsCommunication'
import DynamicComponents from '../components/DynamicComponents.vue'
import DynamicStyling from '../components/styling/DynamicStyling.vue'
import Directives from '../components/directives/Directives.vue'

export default [
    { path: '/', component: Home },
    { path: '/data', component: DataDeclaration },
    { path: '/recursive', component: RecursiveTitle },
    { path: '/templates', component: Templates },
    { path: '/components', component: Components },
    { path: '/component-in-depth', component: ComponentInDepth },
    { path: '/communication', component: ComponentsCommunication },
    { path: '/dynamic-components', component: DynamicComponents },
    { path: '/dynamic-styling', component: DynamicStyling },
    { path: '/directives', component: Directives }
]