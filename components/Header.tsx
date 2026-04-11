'use client'
import Image from "next/image"
import Link from "next/link"

export default function Header() {

    return (
        <>
            <header className="bg-[url('/images/hero.jpeg')] bg-cover bg-center h-100 w-full flex items-center flex-col justify-center">
                <h1 className="text-5xl text-center uppercase font-bold text-white">
                    New album OUT NOW- <br />
                    #ARTIST_NAME
                </h1>
                <div><p className="text-white">Available everywhere</p></div>
            </header>
        </>
    )
}