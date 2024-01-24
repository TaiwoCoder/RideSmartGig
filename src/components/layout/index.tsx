import { Outlet } from "react-router-dom"
import Hero from "../hero"

const Layout = ()=>{

    return(
        <>
            <Hero/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;