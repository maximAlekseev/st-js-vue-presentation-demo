<template>
    <div>
        <h2>Directives</h2>
        <h4>v-bind directive (props, events, class, etc binding)</h4>
        <p>Image src binding (":" - shorthand):</p>
        <img v-bind:src="imageUrl" />
        <h4>v-model directive</h4>
        <Form />
        <h4>v-if directive (v-else, v-else-if)</h4>
        <div class="first-box" v-if="firstActive === 1" @click="firstActive++"></div>
        <div class="second-box" v-else-if="firstActive === 2" @click="firstActive++"></div>
        <div class="third-box" v-else @click="firstActive++"></div>
        <h4>v-for directive (loops)</h4>
        <ul>
            <li v-for="item in items" :key="item">{{item}}</li>
        </ul>
        <h4>v-on directive ("@" - shorthand)</h4>
        <div class="box" @click="activated = !activated" :class="activeClass"></div>
    </div>
</template>

<script>
    import Form from './Form.vue'
    export default {
        name: 'Directives',
        components: {
            Form
        },
        data() {
            return {
                firstActive: 1,
                message: 'Hi, I\'m binded!',
                imageUrl: 'https://via.placeholder.com/350x150',
                items: ['France', 'Mexico', 'Ukraine'],
                activated: false
            }
        },
        updated() {
            if (this.firstActive === 3) {
                setTimeout(() => {
                    this.firstActive = 1
                }, 2000)
            }
        },
        computed: {
            activeClass() {
                return this.activated ? 'active' : ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .first-box {
        width: 200px;
        height: 100px;
        background: blue;
    }

    .second-box {
        width: 200px;
        height: 100px;
        background: green;
    }

    .third-box {
        width: 200px;
        height: 100px;
        background: yellow;
    }

    .box {
        width: 200px;
        height: 100px;
        background: yellow;

        &.active {
            border: 1px solid red;
        }
    }

    img {
        margin-bottom: 20px;
    }
</style>