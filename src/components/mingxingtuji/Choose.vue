<template>
    <div>
        <button @click="change('guanxiaotong')" :class="{active: start == 'guanxiaotong'}">关晓彤</button>
        <button @click="change('jindong')" :class="{active: start == 'jindong'}">靳东</button>
        <button @click="change('luhan')" :class="{active: start == 'luhan'}">鹿晗</button>
        <button @click="change('yangmi')" :class="{active: start == 'yangmi'}">杨幂</button>
    </div>
</template>

<script>
    export default {
        methods: {
            change(start){
                this.$store.dispatch('photoStore/change', {start})
            }
        },
        computed: {
            start() {
                return this.$store.state.photoStore.start
            }
        },
    }
</script>

<style scoped>
.active {
    background: rgb(255, 166, 0);
}
</style>