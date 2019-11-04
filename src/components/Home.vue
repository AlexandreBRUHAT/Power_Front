<template>
    <div id="Home">
        <h1>
            Projet Tutoré - Business Intelligence
        </h1>

        <h2>
            Les enjeux de l'électricité en France
        </h2>

        <table id="table_layout">
            <tr>
                <td>
                    <a href="https://data.enedis.fr/pages/accueil/" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/fr/7/77/Logo_enedis_header.png" id="img_enedis">
                    </a>

                    <a href="https://opendata.reseaux-energies.fr/pages/accueil/" target="_blank">
                        <img src="https://opendata.reseaux-energies.fr/assets/theme_image/Opendata-reseauxenergies.svg" id="img_resenergie">
                    </a>

                    <a href="https://data.gouv.fr" target="_blank">
                        <img src="https://static.data.gouv.fr/_themes/gouvfr/img/logo-social.png" id="img_datagouv">
                    </a>
                </td>

                <td>
                    <table id="table_noms">
                        <tr><td colspan="2">BRUHAT  Alexandre</td></tr>
                        <tr><td>CHATELAIN  Thibault</td></tr>
                        <tr><td>CIAVALDINI  Ilorian</td></tr>
                        <tr><td>MARSANGY  Dylan</td></tr>
                    </table>
                </td>

                <td>
                    <a href="https://fr.talend.com" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/fr/archive/4/4e/20150106111902%21Logo-talend-high.png" id="img_talend">
                    </a>

                    <a href="https://powerbi.microsoft.com" target="_blank">
                        <img src="https://freight.cargo.site/t/original/i/c5949531d6563a134b44e29c84699fa180e2b051ca72d308b964e7819756e101/PowerBINew.jpg" id="img_powerbi">
                    </a>

                    <a href="https://www.mysql.com" target="_blank">
                        <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" id="img_mysql">
                    </a>
                </td>
            </tr>
        </table>

        <h3>
            Haytham Elghazel - 5A Informatique - 2019/2020
        </h3>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    #Home {
        margin: 0;
        padding: 0;
        background-color: #100007;
    }

    h1 {
        text-align: center;

        color: #100007;
        font-size: 250%;
        font-family: Rockwell;

        background-color: #f2a919;
        margin-top: 0px;
        padding-top: 2%;
        padding-bottom: 2%;
    }

    h2 {
        text-align: center;

        font-family: "Rockwell Condensed";
        color: #f2a919;
        font-size: 200%;
        margin-top: 3%;
    }

    h3 {
        text-align: center;

        font-family: "Rockwell Condensed";
        color: #f2a919;
        font-size: 100%;
        margin-top: 5%;
    }

    #table_layout td {
        width: 33%;
    }

    #img_talend {
        width: 40%;
        margin-top: 6%;
        margin-left: 35%;
        margin-right: 25%;
    }

    #img_powerbi {
        width: 20%;
        margin-top: 2%;
        margin-left: 15%;
        margin-right: 65%;

        border-radius: 15px;
    }

    #img_mysql {
        width: 20%;
        margin-top: 9%;
        margin-left: 45%;
        margin-right: 35%;
    }

    #img_enedis {
        width: 30%;
        margin-top: 7%;
        margin-left: 10%;
        margin-right: 50%;
    }

    #img_resenergie {
        width: 45%;
        margin-top: 9%;
        margin-left: 50%;
        margin-right: 5%;

        background-color: bisque;
        border-radius: 15px;
    }

    #img_datagouv {
        width: 30%;
        margin-top: 10%;
        margin-left: 20%;
        margin-right: 50%;

        border-radius: 15px;
    }

    #table_noms {
        text-align: center;
        color: #f2a919;
        font-size: 130%;
        font-family: Rockwell;

        border-left: solid #f2a919 2px;
        border-right: solid #f2a919 2px;
    }

    #table_noms tr {
        line-height: 180%;
    }
</style>