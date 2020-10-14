export default {
    data() {
        return {
            mixinVar: 10,
            mixinObj: {
                count: 10
            }
        }
    },
    methods: {
        toUpperCase(value) {
            return value.toUpperCase()
        }
    },
    mounted() {
        console.log('hook mounted venant de la mixin')
    }
}