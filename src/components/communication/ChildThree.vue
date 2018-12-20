<template>
    <div class="child-three">
        <input type="text" @input="sendMessage($event.target.value)" />
    </div>
</template>

<script>
    export default {
        name: "ChildThree",
        props: {
            sendMessage: {
                type: Function
            }
        }
    }
</script>

<style scoped>
    .child-three {
        padding: 30px;
        border: 1px solid green;
    }
</style>