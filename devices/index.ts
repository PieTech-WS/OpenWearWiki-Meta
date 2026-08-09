import xiaomi_index from "./Xiaomi/index";
import redmi_index from "./REDMI/index";
import Amazfit_index from "./Amazfit/index";
import OPPO_index from "./OPPO/index";

export default [
  {
    text: 'Xiaomi',
    link: '/ProductWiki/devices/Xiaomi',
    items: xiaomi_index,
    collapsed: true
  },
  {
    text: 'REDMI',
    link: '/ProductWiki/devices/REDMI',
    items: redmi_index,
    collapsed: true
  },
    {
    text: 'Amazfit',
    link: '/ProductWiki/devices/Amazfit',
    items: Amazfit_index,
    collapsed: true
  },
  {
    text: 'HUAWEI',
    items: []
  },
  {
    text: 'OPPO',
    link: '/ProductWiki/devices/OPPO',
    items: OPPO_index,
    collapsed: true
  }
]
