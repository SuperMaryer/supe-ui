import Demo from './demo'
import Card from './card'
import TimePeriodList from './time-period-list'
import ContentSection from './content-section'
import PlateNumSelect from './plate-num-select'
import SupeLinearText from './linear-text'
import SupeImageText from './image-text'
import SupeScrollText from './scroll-text'

const components = {
    Demo,
    Card,
    TimePeriodList,
    ContentSection,
    PlateNumSelect,
    SupeLinearText,
    SupeImageText,
    SupeScrollText,
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