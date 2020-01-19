new Vue({
    el : "#app",
    data(){
        return {
            mrColor : false,
            mrLength : false
        }
    },
    computed : {
        change : function(){
            return { changeColor: this.mrColor, changeLength:this.mrLength}
        }
    }
})