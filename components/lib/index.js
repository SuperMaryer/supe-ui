import Demo from './demo'
import Card from './card'
import TimePeriodList from './time-period-list'
import ContentSection from './content-section'

const components = {
    Demo,
    Card,
    TimePeriodList,
    ContentSection,
}

const install = function (Vue) {
    if (install.installed) return;
    Object.keys(components).forEach(key =>{
        Vue.component(components[key].name, components[key])
    })
}

const API = {
    install,
}

export default API;