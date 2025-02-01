import { redirect } from '@/lib/i18n/navigation'
 
export default async function Index() {
  redirect('/dashboard')
}