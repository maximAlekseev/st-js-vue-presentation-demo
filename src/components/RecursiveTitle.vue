<template>
    <section v-if="localCount">
        <p>This is test text</p>
        <hr />
        <RecursiveTitle />
    </section>
</template>

<script>
    let count = 10;
    export default {
        name: "RecursiveTitle",
        data() {
            return {
                localCount: count--
            }
        }
    }
</script>

<style scoped>

</style>