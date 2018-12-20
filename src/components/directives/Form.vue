<template>
    <form @submit.prevent="onSubmit">
        <p>Your input: {{inputText}}</p>
        <input v-model="inputText" placeholder="enter text here" />
    </form>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                inputText: ''
            }
        },
        methods: {
            onSubmit() {
                console.log(this.inputText)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>