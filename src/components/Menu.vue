<template>
    <div>
        <ul>
            <router-link tag="li" :to="{ path: '/' }">Home</router-link>
            <router-link tag="li" :to="{ path: '/data' }">DataDeclaration</router-link>
            <router-link tag="li" :to="{ path: '/recursive' }">RecursiveTitle</router-link>
            <router-link tag="li" :to="{ path: '/templates' }">Templates</router-link>
            <router-link tag="li" :to="{ path: '/components' }">Components</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        padding: 0;

        li {
            display: inline-block;
            padding: 15px 25px;
            border-right: 1px solid black;

            &:last-of-type {
                border: none;
            }
        }
    }
</style>