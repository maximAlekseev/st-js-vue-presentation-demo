<template>
    <div>
        <h2>Dynamic components</h2>
        <h3>"components" - way</h3>
        <component :is="currentComponent" v-bind="currentProps"></component>
        <br>
        <button @click="switchComponent">Switch components</button>
        <h3>Directive - way</h3>
        <DynamicOne v-if="firstActiveByDirective" />
        <DynamicTwo v-else />
        <br>
        <button @click="switchDirectives">Switch components</button>
        <h3>Caching dynamic components</h3>
        <keep-alive>
            <component :is="currentCached"></component>
        </keep-alive>
        <br>
        <button @click="switchCached">Switch components</button>
    </div>
</template>

<script>
    import DynamicOne from './DynamicOne.vue'
    import DynamicTwo from './DynamicTwo.vue'
    export default {
        name: 'DynamicComponents',
        components: {
            DynamicOne,
            DynamicTwo
        },
        data() {
            return {
                firstActiveByComponent: true,
                firstActiveByDirective: true,
                someString: "I'm a random string!",
                firstCachedActive: true
            }
        },
        methods: {
            switchComponent() {
                this.firstActiveByComponent = !this.firstActiveByComponent
            },
            switchDirectives() {
                this.firstActiveByDirective = !this.firstActiveByDirective
            },
            switchCached() {
                this.firstCachedActive = !this.firstCachedActive
            }
        },
        computed: {
            currentComponent() {
                return this.firstActiveByComponent ? DynamicOne : DynamicTwo
            },
            currentProps () {
                return this.currentComponent === DynamicOne ? {
                    message: this.someString
                } : null
            },
            currentCached() {
                return this.firstCachedActive ? DynamicOne : DynamicTwo
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>