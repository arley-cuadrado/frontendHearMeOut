'use client'

import Link from "next/link"

export default function Header() {

    return (
        <>
            <header className="bg-[url('/img/hero.jpg')] bg-cover bg-center h-64 w-full">
                <h1>
                    New album OUT NOW-
                    #ARTIST_NAME
                </h1>
                <p>Available everywhere</p>
            </header>
        </>
    )
}