"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import * as React from "react"

const slides = [
  {
    id: 1,
    title: "Programa de Controle Médico de Saúde Ocupacional",
    description: "Elaboração e implementação de PCMSO personalizado para sua empresa.",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 2,
    title: "Equipe Médica Especializada",
    description: "Médicos do trabalho com ampla experiência na elaboração e coordenação de PCMSO.",
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 3,
    title: "Gestão Integrada",
    description: "Integração do PCMSO com o PGR para uma gestão completa da saúde ocupacional.",
    image: "/placeholder.svg?height=400&width=800",
  },
]

export default function PcmsoSlider() {
  const [api, setApi] = React.useState<CarouselApi>()

  return (
    <Carousel className="w-full" setApi={setApi}>
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-0 relative">
                  <div className="relative w-full h-[350px] md:h-[500px]">
                    <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-white/90">{slide.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full bg-gray-300 focus:outline-none"
            onClick={() => {
              if (api) {
                api.scrollTo(index)
              }
            }}
          />
        ))}
      </div>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}
