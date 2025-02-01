"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { locales  } from '@/lib/i18n/navigation';

export const LanguageSwitcher = () => {
  const pathname = usePathname()

  return (
    <div className="flex space-x-2">
      {locales.map((locale) => (
        <Link 
          key={locale} 
          href={pathname} 
          locale={locale}
          className="px-2 py-1 bg-primary text-primary-foreground"
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}