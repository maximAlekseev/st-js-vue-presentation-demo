<template>
    <div class="child-one">
        <p>{{message}}</p>
        <p>Provided message: {{providedMessage}}</p>
        <ChildTwo
                :message="message"
        />
    </div>
</template>

<script>
    import ChildTwo from './ChildTwo'
    export default {
        name: "ChildOne",
        components: {
            ChildTwo
        },
        inject: ['providedMessage'],
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