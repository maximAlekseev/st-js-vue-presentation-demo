<template>
    <div class="dynamic-one">
        <h4>Dynamic component one</h4>
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: 'DynamicOne',
        props: {
            message: {
                type: String
            }
        },
        created() {
            console.log('DynamicOne created!')
        }
    }
</script>

<style lang="scss" scoped>
    .dynamic-one {
        width: 300px;
        height: 160px;
        border: 1px solid red;
        text-align: center;
    }
</style>