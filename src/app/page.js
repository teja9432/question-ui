"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Question } from "@/components/question";
export default function Home() {
  return (<div>
    <Header/>
    <Question/>
    <Footer/>
  </div>)
}
