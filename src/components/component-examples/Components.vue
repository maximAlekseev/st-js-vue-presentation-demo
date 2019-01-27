<template>
    <div>
        <h3>Template components</h3>
        <my-checkbox-string />
        <h3>String literal template</h3>
        <my-checkbox-literal />
        <h3>X-template</h3>
        <my-checkbox-x-template />
        <h3>Inline templates</h3>
        <my-checkbox-inline inline-template>
            <div class="checkbox-wrapper" @click="check">
                <div :class="{ checkbox: true, checked: checked }"></div>
                <div class="title">{{title}}, Status: {{checked}}</div>
            </div>
        </my-checkbox-inline>
        <h3>Render functions</h3>
        <my-checkbox-render-func />
        <h3>Jsx component</h3>
        <my-checkbox-jsx />
        <h3>Single file component</h3>
        <CheckboxSFC />
        <hr />
        <h6>*To use JSX we need to install babel-preset-vue-app and define it in babel.config.js</h6>
        <h6>*To render boolean value "checked" in JSX-styled component render function we need to convert to string</h6>
    </div>
</template>

<script>
    import CheckboxSFC from './CheckboxSFC'
    export default {
        name: "Components",
        components: {
            CheckboxSFC
        }
    }
</script>

<style scoped>

</style>