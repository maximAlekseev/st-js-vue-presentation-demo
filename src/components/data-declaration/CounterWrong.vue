<template>
    <div class="counter" @click="increment">
        <div>{{count}}</div>
    </div>
</template>

<script>
    const data = {
        count: 1
    }
    export default {
        name: "CustomCounter",
        data() {
            return data
        },
        methods: {
            increment() {
                this.count++
            }
        }
    }
</script>

<style lang="scss" scoped>
    .counter {
        display: inline-block;
        padding: 20px;
        border: 1px solid red;
    }
</style>