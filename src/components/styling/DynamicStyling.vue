<template>
    <div>
        <h2>Dynamic styling</h2>
        <div class="row">
            <Styles />
            <Classes />
        </div>
    </div>
</template>

<script>
    import Styles from './Styles.vue'
    import Classes from './Classes.vue'
    export default {
        name: 'DynamicStyling',
        components: {
            Styles,
            Classes
        }
    }
</script>

<style lang="scss" scoped>

</style>