"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 text-sm text-gray-600 border-b">
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-sky-600">
              Sobre
            </Link>
            <Link href="#" className="hover:text-sky-600">
              Contato
            </Link>
            <Link href="#" className="hover:text-sky-600">
              FAQ
            </Link>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-sky-600" />
            <span>(21) 9999-9999</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Clínica Dra. Dinorah Logo" width={60} height={60} className="mr-2" />
            <div className="text-sky-600 font-semibold">
              <div>CLÍNICA DRA. DINORAH</div>
              <div className="text-xs">MEDICINA E SEGURANÇA DO TRABALHO</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link href="#" className="font-medium hover:text-sky-600">
                Home
              </Link>
              <Link href="#" className="font-medium hover:text-sky-600">
                Sobre
              </Link>
              <div className="relative group">
                <Link href="#" className="font-medium hover:text-sky-600 flex items-center">
                  Serviços
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
              <Link href="#" className="font-medium hover:text-sky-600">
                Exames
              </Link>
              <Link href="#" className="font-medium hover:text-sky-600">
                Área do Cliente
              </Link>
            </nav>

            <Button className="bg-sky-600 hover:bg-sky-700">Agendar Consulta</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="font-medium hover:text-sky-600">
                Home
              </Link>
              <Link href="#" className="font-medium hover:text-sky-600">
                Sobre
              </Link>
              <Link href="#" className="font-medium hover:text-sky-600">
                Serviços
              </Link>
              <Link href="#" className="font-medium hover:text-sky-600">
                Exames
              </Link>
              <Link href="#" className="font-medium hover:text-sky-600">
                Área do Cliente
              </Link>
            </nav>
            <div className="mt-4">
              <Button className="w-full bg-sky-600 hover:bg-sky-700">Agendar Consulta</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
