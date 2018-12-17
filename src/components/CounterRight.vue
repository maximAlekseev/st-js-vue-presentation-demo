<template>
    <div class="counter" @click="increment">
        <div>{{count}}</div>
    </div>
</template>

<script>
    export default {
        name: "CustomCounter",
        data() {
            return {
                count: 1
            }
        },
        methods: {
            increment() {
                this.count++
            }
        }
    }
</script>

<style scoped>
    .counter {
        display: inline-block;
        padding: 20px;
        border: 1px solid green;
    }
</style>