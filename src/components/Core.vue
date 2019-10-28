<template>
    <div id="Core">
        <NavBar></NavBar>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue';

    export default {
        name: "Core",
        components: {
            NavBar
        }
    }
</script>

<style scoped>

</style>