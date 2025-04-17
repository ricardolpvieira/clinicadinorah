import Link from "next/link"
import {
  FileText,
  Users,
  Headphones,
  Clipboard,
  Activity,
  User,
  ClipboardCheck,
  FlaskRoundIcon as Flask,
  Shield,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceItemProps {
  title: string
  icon: string
  href?: string
}

export default function ServiceItem({ title, icon, href = "#" }: ServiceItemProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "file-text":
        return <FileText className="h-8 w-8 text-sky-600" />
      case "users":
        return <Users className="h-8 w-8 text-sky-600" />
      case "headphones":
        return <Headphones className="h-8 w-8 text-sky-600" />
      case "clipboard":
        return <Clipboard className="h-8 w-8 text-sky-600" />
      case "activity":
        return <Activity className="h-8 w-8 text-sky-600" />
      case "user":
        return <User className="h-8 w-8 text-sky-600" />
      case "clipboard-check":
        return <ClipboardCheck className="h-8 w-8 text-sky-600" />
      case "flask":
        return <Flask className="h-8 w-8 text-sky-600" />
      case "shield":
        return <Shield className="h-8 w-8 text-sky-600" />
      default:
        return <FileText className="h-8 w-8 text-sky-600" />
    }
  }

  return (
    <Link href={href} className="block">
      <Card className="hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="mb-4">{getIcon(icon)}</div>
          <h4 className="font-medium text-center">{title}</h4>
        </CardContent>
      </Card>
    </Link>
  )
}
