<template>
    <div class="col-6">
        <h3>Classes</h3>
        <h4>Inline binding</h4>
        <div class="styled-box box" :class="{ 'error-class': isError, 'error-text': errorText }" @click="isError = !isError">
            <p class="text-center">Some text</p>
        </div>
        <h4>With computed</h4>
        <div class="styled-box" :class="[activeClass, errorDependent]" @click="normalClass = !normalClass"></div>
        <h4>Inline with computed</h4>
        <div class="styled-box" :class="[activeClass, { 'error-class': isError }]" @click="isError = !isError"></div>
    </div>
</template>

<script>
    export default {
        name: 'Classes',
        data() {
            return {
                isError: false,
                normalClass: true
            }
        },
        computed: {
            errorText() {
                return this.isError
            },
            activeClass() {
                return this.normalClass ? 'normal-box' : 'restyled-box'
            },
            errorDependent() {
                return this.isError ? 'error-class' : 'normal-box'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .normal-box {
        border: 1px solid green;
        background: lightgrey;
    }

    .restyled-box {
        border: 1px solid blue;
        background: silver;
    }

    .box {
        background: lightgrey;
        border: 1px solid black;
    }

    .error-class {
        border-color: red;
        background: white;
    }

    .error-text {
        color: red;
    }
</style>