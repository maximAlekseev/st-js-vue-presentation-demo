<template>
    <div class="dynamic-two">
        <h4>Dynamic component two</h4>
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: 'DynamicTwo',
        props: {
            message: {
                type: String
            }
        },
        created() {
            console.log('DynamicTwo created!')
        }
    }
</script>

<style lang="scss" scoped>
    .dynamic-two {
        width: 300px;
        height: 160px;
        border: 1px solid blue;
        text-align: center;
    }
</style>