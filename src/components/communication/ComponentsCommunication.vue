<template>
    <div>
        <h2>Components communication</h2>
        <h3>Passing props to children with provider / injector syntax</h3>
        <ChildOne
            :message="message"
        />
        <h3>Child to parent</h3>
        <h2>Callback function</h2>
        <p>Child message: {{thirdChildMessage}}</p>
        <ChildThree
            :sendMessage="callback"
        />
        <h2>Events</h2>
        <p>Child message: {{fourChildMessage}}</p>
        <ChildFour
            @childEvent="eventHandler"
        />
        <h3>Event bus</h3>
        <p>Child message: {{fiveChildMessage}}</p>
        <ChildFive />
    </div>
</template>

<script>
    import ChildOne from './ChildOne'
    import ChildThree from './ChildThree'
    import ChildFour from './ChildFour'
    import ChildFive from './ChildFive'
    import { EventBus } from '../../main'
    export default {
        name: "ComponentsCommunication",
        components: {
            ChildOne,
            ChildThree,
            ChildFour,
            ChildFive
        },
        mounted() {
            EventBus.$on('bus-event', value => {
                this.fiveChildMessage = value
            })
        },
        provide() {
            return {
                providedMessage: this.providedMessage
            }
        },
        data() {
            return {
                message: 'Hey from parent component!',
                thirdChildMessage: '',
                fourChildMessage: '',
                fiveChildMessage: '',
                providedMessage: 'Provided message'
            }
        },
        methods: {
            callback(message) {
                this.thirdChildMessage = message;
            },
            eventHandler(message) {
                this.fourChildMessage = message;
            }
        }
    }
</script>

<style scoped>

</style>