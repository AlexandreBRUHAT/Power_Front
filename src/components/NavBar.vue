<template>
    <div id="navbar" class="page-container md-layout-column">
        <md-toolbar>
            <md-button class="md-icon-button" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>
            <md-button class="md-title" @click="navigate('/')">Données énergie</md-button>
        </md-toolbar>

        <md-drawer :md-active.sync="showNavigation" md-swipeable>
            <md-toolbar class="md-transparent" md-elevation="0">
                <md-button class="md-title" @click="navigate('/')">Données énergie</md-button>
            </md-toolbar>

            <md-list>
                <md-list-item @click="navigate('/global')">
                    <md-icon>public</md-icon>
                    <span class="md-list-item-text">Vue globale</span>
                </md-list-item>

                <md-list-item @click="navigate('/conso')">
                    <md-icon>power</md-icon>
                    <span class="md-list-item-text">Consommation</span>
                </md-list-item>

                <md-list-item @click="navigate('/prod')">
                    <md-icon>flash_on</md-icon>
                    <span class="md-list-item-text">Production</span>
                </md-list-item>

                <md-list-item @click="navigate('/eco')">
                    <md-icon>eco</md-icon>
                    <span class="md-list-item-text">Ecologie</span>
                </md-list-item>

                <md-list-item @click="navigate('/incident')">
                    <md-icon>power_off</md-icon>
                    <span class="md-list-item-text">Incidents</span>
                </md-list-item>

                <md-list-item @click="navigate('/invest')">
                    <md-icon>trending_up</md-icon>
                    <span class="md-list-item-text">Investissement</span>
                </md-list-item>
            </md-list>
        </md-drawer>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data: () => ({
            showNavigation: false
        }),
        methods: {
            navigate(route) {
                console.log("Navigate to ", route);
                this.showNavigation = false
                this.$router.push(route);
            }
        }
    }
</script>

<style scoped>
    @import "../scss/navbar.scss";
</style>