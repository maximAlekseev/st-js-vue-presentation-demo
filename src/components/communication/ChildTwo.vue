<template>
    <div class="child-two">
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "ChildTwo",
        inject: ['message']
    }
</script>

<style lang="scss" scoped>
    .child-two {
        padding: 40px;
        border: 1px solid red;
    }
</style>