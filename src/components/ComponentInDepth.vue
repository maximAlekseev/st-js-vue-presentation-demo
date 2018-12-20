<template>
    <div>
        <h2>Example component</h2>
        <!--<CheckboxSFC />-->
        <checkbox-sfc />
        <h3>Basic computed property example</h3>
        <input type="text" v-model="inputString" placeholder="enter here" />
        <p>Calculation in template: {{inputString.split('').reverse().join('')}}</p>
        <p>Method reverse: {{reverseMethod()}}</p>
        <p>Reverse result, utilized with watcher: {{reversedString}}</p>
        <p>Computed: {{reverseInputString}}</p>
        <h3>Example of methods vs computed invocations</h3>
        <p>Some random value: {{someValue}}</p>
        <button @click="incrementValue">Increment value</button>
        <h3>Example of methods vs computed update</h3>
        <p>Some other random value: {{someOtherValue}}</p>
        <p>Some other random value + 1 computed: {{addToValue}}</p>
        <p>Some other random value + 1 method: {{addToValueMethod()}}</p>
        <button @click="incrementOtherValue">Increment other value</button>
        <h3>Example of never updating computed</h3>
        <p>Data property Date: {{currentDate}}</p>
        <p>Computed Date (not-updating): {{now}}</p>
        <p>Method Date (updating): {{nowUpdating()}}</p>
        <h3>Setting computed property</h3>
        <label for="computed-checkbox">Check status</label>
        <input id="computed-checkbox" type="checkbox" v-model="currentStatus">
        <p>Status: {{statusProxy}}</p>
        <h3>Watcher example</h3>
        <input type="text" v-model="query" placeholder="enter query here" />
        <ul>
            <li v-for="result in results" :key="result">{{result}}</li>
        </ul>
    </div>
</template>

<script>
    import CheckboxSFC from './CheckboxSFC'
    export default {
        name: "ComponentInDepth",
        beforeCreate() { },
        created() { },
        beforeMount() { },
        mounted() { },
        beforeUpdate() { },
        updated() { },
        beforeDestroy() { },
        destroyed() { },
        components: {
            // CheckboxSFC
            'checkbox-sfc': CheckboxSFC
        },
        data() {
            return {
                inputString: '',
                reversedString: '',
                currentDate: new Date(),
                someValue: 1,
                someOtherValue: 2,
                statusProxy: null,
                query: '',
                results: [],
                isSearching: false
            }
        },
        computed: {
            reverseInputString: function () {
                console.log('reverse computed invocation')
                return this.inputString.split('').reverse().join('')
            },
            now() {
                console.log('now computed property invocation')
                return new Date()
            },
            addToValue() {
                console.log('addToValue computed property invocation')
                return this.someOtherValue + 1
            },
            currentStatus: {
                get() {
                    return (this.statusProxy === null) ? true : this.statusProxy
                },
                set(newValue) {
                    this.statusProxy = newValue
                }
            }
        },
        methods: {
            nowUpdating() {
                console.log('nowUpdating method invocation')
                return new Date()
            },
            reverseMethod() {
                return this.inputString.split('').reverse().join('')
            },
            addToValueMethod() {
                console.log('addToValueMethod method invocation')
                return this.someOtherValue + 1
            },
            incrementValue() {
                this.someValue++;
            },
            incrementOtherValue() {
                this.someOtherValue++;
            }
        },
        watch: {
            inputString(newValue, oldValue) {
                return this.reversedString = newValue.split('').reverse().join('')
            },
            query(newValue, oldValue) {
                this.isSearching = true

                setTimeout(() => {
                    this.results = ['USA', 'France', 'China']
                }, 1000)
            }
        }
    }
</script>

<style scoped>

</style>