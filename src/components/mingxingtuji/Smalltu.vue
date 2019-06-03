<template>
    <div>
        <button @click="gofront">上一张</button>
        <img  v-for="item in 5" :key="item" :class="{'cur': item == idx}" :src="`static/image/${start}/${item}.jpg`">
        <button @click="gonext">下一张</button>
    </div>
</template>

<script>
    export default {
        computed: {
            idx() {
                return this.$store.state.photoStore.idx
            },
            start() {
                return this.$store.state.photoStore.start
            }
        },
        methods: {
            gofront(){
                this.$store.dispatch('photoStore/gofor',{'pos': 1})
            },
            gonext(){
                this.$store.dispatch('photoStore/gofor',{'pos': 0})
            }
        }
    }
</script>

<style scoped>
img{
    width: 60px;
    height: 50px;
}
.cur{
    border: 1px solid red;
}
</style>