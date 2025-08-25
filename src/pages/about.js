import React from "react"
import Layout from "../components/Layout"
import PageTransition from "../components/PageTransition"
import MainComponent from "../components/main-component"
import Footer from "../components/Footer"
import Placeholder from "../components/placeholder"

export default function Home({ location }) {
    return (
        <Layout>
            <PageTransition location={location}>
                <div className="p-10">
                    <MainComponent />
                    {/* <Placeholder /> */}
                    <Footer />
                </div>
            </PageTransition>
        </Layout>
    )
}
