<template>
    <div class="child-one">
        <p>{{message}}</p>
        <ChildTwo />
    </div>
</template>

<script>
    import ChildTwo from './ChildTwo'
    export default {
        name: "ChildOne",
        components: {
            ChildTwo
        },
        // props: ['message']
        props: {
            message: { type: String, required: true }
        }
    }
</script>

<style lang="scss" scoped>
    .child-one {
        padding: 40px;
        border: 1px solid blue;
    }
</style>