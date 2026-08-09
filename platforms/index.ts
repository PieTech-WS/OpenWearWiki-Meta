import platform_index_xring from './XRING/index'
import platform_index_bestechnic from './Bestechnic/index'

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