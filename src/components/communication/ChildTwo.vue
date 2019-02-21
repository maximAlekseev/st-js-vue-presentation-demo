<template>
    <div class="child-two">
        <p>{{message}}</p>
        <p>{{providedMessage}}</p>
    </div>
</template>

<script>
    export default {
        name: "ChildTwo",
        props: {
            message: { type: String }
        },
        inject: ['providedMessage']
    }
</script>

<style lang="scss" scoped>
    .child-two {
        padding: 40px;
        border: 1px solid red;
    }
</style>