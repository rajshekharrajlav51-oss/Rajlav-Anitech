import { ServicePage, serviceMetadata } from '../service-renderer'

export const metadata = serviceMetadata('healthcare-software')

export default function HealthcareSoftwarePage() {
  return <ServicePage slug="healthcare-software" />
}
