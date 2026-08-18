import { ServicePage, serviceMetadata } from '../service-renderer'

export const metadata = serviceMetadata('software-development')

export default function SoftwareDevelopmentPage() {
  return <ServicePage slug="software-development" />
}
