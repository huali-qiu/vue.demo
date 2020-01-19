new Vue({
    el : "#app",
    data(){
        return {
            a : 0,
            b : 0,
            age : 18
        }
    },
    methods : {

    },
    computed : {
        addToA() {
            console.log("aaa");
            return this.age + this.a;
        },
        addToB() {
            console.log("bbb")
            return this.age + this.b;
        }
    }
})