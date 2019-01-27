<template>
    <div class="main-menu">
        <ul>
            <router-link tag="li" :to="{ path: '/' }" exact active-class="active-item">Home</router-link>
            <router-link tag="li" :to="{ path: '/data' }" active-class="active-item">DataDeclaration</router-link>
            <router-link tag="li" :to="{ path: '/recursive' }" active-class="active-item">RecursiveTitle</router-link>
            <router-link tag="li" :to="{ path: '/templates' }" active-class="active-item">Templates</router-link>
            <router-link tag="li" :to="{ path: '/directives' }" active-class="active-item">Directives</router-link>
            <router-link tag="li" :to="{ path: '/components' }" active-class="active-item">Components</router-link>
            <router-link tag="li" :to="{ path: '/components-declaration' }" active-class="active-item">Components declaration</router-link>
            <router-link tag="li" :to="{ path: '/component-in-depth' }" active-class="active-item">Component-in-depth</router-link>
            <router-link tag="li" :to="{ path: '/communication' }" active-class="active-item">Components communication</router-link>
            <router-link tag="li" :to="{ path: '/dynamic-components' }" active-class="active-item">Dynamic components</router-link>
            <router-link tag="li" :to="{ path: '/dynamic-styling' }" active-class="active-item">Dynamic styling</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style lang="scss" scoped>
    .main-menu {
        border-right: 1px solid lightgray;
        flex: 1;

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                padding: 15px 25px;
                border-bottom: 1px solid lightgray;
                cursor: pointer;

                &:last-of-type {
                    border-right: none;
                }

                &:hover {
                    background-color: lightgrey;
                }

                &.active-item {
                    background-color: lightgrey;
                }
            }
        }
    }
</style>