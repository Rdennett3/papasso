import React from "react"
import Layout from "../components/Layout"
import PageTransition from "../components/PageTransition"

export default function Home({ location }) {
    return (
        <Layout>
            <PageTransition location={location}>
                <div className="p-10">
                    <h1 className="text-4xl">Gallery Page</h1>
                </div>
            </PageTransition>
        </Layout>
    )
}
