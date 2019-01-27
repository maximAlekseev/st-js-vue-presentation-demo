<template>
    <div>
        <h1>Components declaration</h1>
        <some-component></some-component>
        <SomeComponent></SomeComponent>
        <SomeComponent />
    </div>
</template>

<script>
    import SomeComponent from './SomeComponent'

    export default {
        name: "ComponentsDeclaration",
        components: {
            // 'some-component': SomeComponent,
            SomeComponent
        }
    }
</script>

<style scoped>

</style>