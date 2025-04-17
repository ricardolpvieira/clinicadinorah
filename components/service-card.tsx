import Link from "next/link"
import { FileText, Stethoscope, Shield } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  color: string
  href?: string
}

export default function ServiceCard({ title, description, icon, color, href = "#" }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "file-text":
        return <FileText className="h-8 w-8 text-white" />
      case "stethoscope":
        return <Stethoscope className="h-8 w-8 text-white" />
      case "shield":
        return <Shield className="h-8 w-8 text-white" />
      default:
        return <FileText className="h-8 w-8 text-white" />
    }
  }

  return (
    <Link href={href} className="block group">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
        <div className={`${color} p-4`}>
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-white/20">{getIcon(icon)}</div>
            <h3 className="ml-4 text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-gray-600">{description}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <span className="text-sky-600 font-medium flex items-center group-hover:underline">
            SAIBA MAIS
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}
