import Home from "./components/Home";
import Consommation from "./components/Consommation";
import Production from "./components/Production";
import Ecologie from "./components/Ecologie";
import Incident from "./components/Incident";
import Investissement from "./components/Investissement";
import Global from "./components/Global";

export default [
    { path: '/', component: Home},
    { path: '/global', component: Global},
    { path: '/conso', component: Consommation},
    { path: '/prod', component: Production},
    { path: '/eco', component: Ecologie},
    { path: '/incident', component: Incident},
    { path: '/invest', component: Investissement},
]