<template>
    <div class="child-four">
        <input type="text" @input="emitEvent" />
    </div>
</template>

<script>
    export default {
        name: "ChildFour",
        methods: {
            emitEvent(e) {
                this.$emit('childEvent', e.target.value)
            }
        }
    }
</script>

<style scoped>
    .child-four {
        padding: 30px;
        border: 1px solid silver;
    }
</style>