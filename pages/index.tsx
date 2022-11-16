import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
    <div className="container mx-auto py-24">
      <div className="sm:text-center text-center ">
        <h2 className="text-xl font-semibold tracking-wide leading-8 text-indigo-600 font-['Prompt']">เริ่มต้นการเดินทาง</h2>
        <p className="mt-2 text-5xl font-bold tracking-wide text-slate-50 sm:text-6xl">Footitimatizer 1.0 Alpha</p>
        <h2 className="mt-5 text-lg font-normal leading-8 text-slate-500 font-['Prompt']">การเป็นนักฟุตบอลอาชีพในจินตนาการของคุณ มาสร้างเส้นทางอาชีพที่สุดยอดไปด้วยกัน !</h2>
      </div>
    </div>
    </div>
  )
}
