import Home from '../components/common/Home'
import DataDeclaration from '../components/data-declaration/DataDeclaration'
import RecursiveTitle from '../components/recursive/RecursiveTitle'
import Templates from '../components/templates/Templates'
import Components from '../components/component-examples/Components'
import ComponentInDepth from '../components/component-examples/ComponentInDepth'
import ComponentsCommunication from '../components/communication/ComponentsCommunication'
import DynamicComponents from '../components/dynamic/DynamicComponents.vue'
import DynamicStyling from '../components/styling/DynamicStyling.vue'
import Directives from '../components/directives/Directives.vue'
import ComponentsDeclaration from '../components/components-declaration/ComponentsDeclaration'

export default [
    { path: '/', component: Home },
    { path: '/data', component: DataDeclaration },
    { path: '/recursive', component: RecursiveTitle },
    { path: '/templates', component: Templates },
    { path: '/components', component: Components },
    { path: '/components-declaration', component: ComponentsDeclaration },
    { path: '/component-in-depth', component: ComponentInDepth },
    { path: '/communication', component: ComponentsCommunication },
    { path: '/dynamic-components', component: DynamicComponents },
    { path: '/dynamic-styling', component: DynamicStyling },
    { path: '/directives', component: Directives }
]