import Index from "../views/Index/Index"
import Detail from "../views/Detail/Detail"


const routes=[
    {
        path:"/index",
        component:Index,
    },
    {
        path:"/detail",
        component:Detail
    },
    {
        path:"/",
        to:"/index"
    }
]

export default routes;