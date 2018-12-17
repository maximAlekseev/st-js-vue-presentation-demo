<template>
    <div>
        <h2>Here are wrong created counters</h2>
        <CounterWrong />
        <CounterWrong />
        <CounterWrong />
        <h2>Here are right created counters</h2>
        <CounterRight />
        <CounterRight />
        <CounterRight />
    </div>
</template>

<script>
    import CounterWrong from './CounterWrong'
    import CounterRight from './CounterRight'
    export default {
        name: "DataDeclaration",
        components: {
            CounterWrong,
            CounterRight
        }
    }
</script>

<style scoped>

</style>