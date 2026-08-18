import { ServicePage, serviceMetadata } from '../service-renderer'

export const metadata = serviceMetadata('business-automation')

export default function BusinessAutomationPage() {
  return <ServicePage slug="business-automation" />
}
