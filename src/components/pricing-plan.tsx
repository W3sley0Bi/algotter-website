import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function PricingPlan({
  perks,
  mostPopular = false,
  planName,
  description,
  price,
  free= false,
  business = false,
}: {
  perks: string[]
  mostPopular?: boolean
  planName: string
  description: string
  price?: string
  free?: boolean
  business?: boolean
  
}) {
  return (
    <div className="border-border dark:border-darkBorder dark:bg-secondaryBlack flex flex-col justify-between rounded-base border-2 bg-white p-5">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-heading">{planName}</h3>
          {mostPopular && (
            <span className="border-border text-text dark:border-darkBorder rounded-base border-2 bg-main px-2 py-0.5 text-sm">
              Most popular
            </span>
          )}
          {business && (
            <span className="border-border text-text dark:border-darkBorder rounded-base border-2 bg-main px-2 py-0.5 text-sm">
              Business
            </span>
          )}
        </div>
        <p className="mb-3 mt-1">{description}</p>
        {!business ? ( free ? (
          <div>
            <span className="text-3xl font-heading">Free</span>{' '}
        </div>) :
          <div>
            <span className="text-3xl font-heading">${price}</span>{' '}
            <span>/month</span>{' '}
          </div>
        ) : (
          <div>
            <span className="text-3xl font-heading">Everything in Basic plus</span>{' '}
            {/* <span>/month</span>{' '} */}
          </div>
        )}
        
        
        <ul className="mt-8 flex flex-col gap-2">
          {perks.map((perk) => {
            return (
              <li key={perk} className="flex items-center gap-3">
                <Check className="shrink-0" size={20} /> {perk}
              </li>
            )
          })}
        </ul>
      </div>
      <Button
        size={mostPopular ? 'lg' : 'default'}
        className={cn('mt-12 w-full', mostPopular && 'bg-black text-white')}
      >
       {business ? 'Contact us' : 'Start Now'}
      </Button>
    </div>
  )
}
