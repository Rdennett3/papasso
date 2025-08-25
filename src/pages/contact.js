import React from "react"
import Layout from "../components/Layout"
import PageTransition from "../components/PageTransition"
import PreForm from "../components/PreForm"

export default function Home({ location }) {
    return (
        <Layout>
            <PageTransition location={location}>
                <div className="p-10">
                    <PreForm />
                </div>
            </PageTransition>
        </Layout>
    )
}
