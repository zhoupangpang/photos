<template>
    <div>
        <!-- +拼接  `` 拼接 -->
        <img :src="'static/image/'+ start + '/' + idx + '.jpg'">
        <!-- <img  :src="`static/image/${start}/${idx}.jpg`"> -->
    </div>
</template>

<script>
    export default {
        computed: {
            start() {
                return this.$store.state.photoStore.start
            },
            idx() {
                return this.$store.state.photoStore.idx
            }
        }
    }
</script>

<style scoped>

</style>