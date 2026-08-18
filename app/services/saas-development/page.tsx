import { ServicePage, serviceMetadata } from '../service-renderer'

export const metadata = serviceMetadata('saas-development')

export default function SaasDevelopmentPage() {
  return <ServicePage slug="saas-development" />
}
