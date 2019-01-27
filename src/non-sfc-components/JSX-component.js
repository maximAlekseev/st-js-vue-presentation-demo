export default {
    data() {
        return {
            checked: false,
            title: 'Check me'
        }
    },
    methods: {
        check() {
            this.checked = !this.checked;
        }
    },
    render() {
        return <div class="checkbox-wrapper" onClick={ this.check }>
            <div class={{ checkbox: true, checked: this.checked }}></div>
            <div class="title">{ this.title }, Status: {this.checked.toString()}</div>
        </div>
    }
}