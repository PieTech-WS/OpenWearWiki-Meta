import platform_index_xring from './XRING/index'
import platform_index_bestechnic from './Bestechnic/index'
import platform_index_Qualcomm from './Qualcomm/index'

export default [
    {
        text: "Apollo",
    },
    {
        text: "Bestechnic",
        items: platform_index_bestechnic,
        collapsed: true
    },
    {
        text: "Qualcomm",
        items: platform_index_Qualcomm,
        collapsed: true
    },
    {
        text: "Hisilicon",
    },
    {
        text: "XRING",
        items: platform_index_xring,
        collapsed: true
    }
]