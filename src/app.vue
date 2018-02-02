<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
import Dialog from "./js/dialog.js"
export default {
    name: "dilog",
    data() {
        return {
            msg: "666"
        }
    },
    mounted() {
        this.go();
    },
    methods: {
        go() {
            let dialog = new Dialog();
        }
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}

</style>