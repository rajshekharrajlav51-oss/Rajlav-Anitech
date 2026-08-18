import { ServicePage, serviceMetadata } from '../service-renderer'

export const metadata = serviceMetadata('web-development')

export default function WebDevelopmentPage() {
  return <ServicePage slug="web-development" />
}
