<template>
    <div class="child-five">
        <input type="text" @input="emitBusEvent" />
    </div>
</template>

<script>
    import { EventBus } from '../../main';
    export default {
        name: "ChildFive",
        methods: {
            emitBusEvent(e) {
                EventBus.$emit('bus-event', e.target.value)
            }
        }
    }
</script>

<style scoped>
    .child-five {
        padding: 30px;
        border: 1px solid brown;
    }
</style>