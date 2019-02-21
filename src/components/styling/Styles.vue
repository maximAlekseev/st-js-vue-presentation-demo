<template>
    <div class="col-6">
        <h3>Styles</h3>
        <h4>Inline</h4>
        <div class="styled-box" :style="{ background: inlineStyles.background, border: inlineStyles.border, 'border-radius': inlineStyles.borderRadius }"></div>
        <h4>Property binding</h4>
        <div class="styled-box" :style="inlineStyles"></div>
        <h4>Multiple binded style objects</h4>
        <div class="styled-box" :style="[normalStyles, anotherStyles]"></div>
        <h4>With computed</h4>
        <div class="styled-box" :style="activeStyle" @click="normalStyle = !normalStyle"></div>
    </div>
</template>

<script>
    export default {
        name: 'Styles',
        data() {
            return {
                inlineStyles: {
                    background: 'blue',
                    border: '1px solid black',
                    borderRadius: '50%'
                },
                normalStyles: {
                    border: '1px solid red',
                    background: 'lightgrey'
                },
                changedStyles: {
                    border: '1px solid blue',
                    background: 'brown'
                },
                anotherStyles: {
                    border: '1px solid yellow',
                    background: 'green'
                },
                normalStyle: true
            }
        },
        computed: {
            activeStyle() {
                return this.normalStyle ? this.normalStyles : this.changedStyles
            }
        }
    }
</script>