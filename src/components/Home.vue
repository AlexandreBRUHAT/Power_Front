<template>
    <div id="home">
        <NavBar></NavBar>
        <Core></Core>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue';
    import Core from "./Core";

    export default {
        name: "Home",
        components: {
            Core,
            NavBar
        }
    }
</script>

<style scoped>

</style>