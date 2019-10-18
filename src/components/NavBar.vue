<template>
    <div id="navbar" class="page-container md-layout-column">
        <md-toolbar>
            <md-button class="md-icon-button" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">Données énergie</span>
        </md-toolbar>

        <md-drawer :md-active.sync="showNavigation" md-swipeable>
            <md-toolbar class="md-transparent" md-elevation="0">
                <span class="md-title">Données énergie</span>
            </md-toolbar>

            <md-list>
                <md-list-item>
                    <md-icon>public</md-icon>
                    <span class="md-list-item-text">Vue globale</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>power</md-icon>
                    <span class="md-list-item-text">Consommation</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>flash_on</md-icon>
                    <span class="md-list-item-text">Production</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>eco</md-icon>
                    <span class="md-list-item-text">Ecologie</span>
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
        })
    }
</script>

<style scoped>
    @import "../scss/navbar.scss";
</style>