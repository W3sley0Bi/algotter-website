'use client'

import PricingPlan from '@/components/pricing-plan'

export default function Pricing() {
  return (
    <section
      className="relative inset-0 flex w-full flex-col items-center justify-center overflow-hidden border-b-2 border-b-border dark:border-b-darkBorder bg-bg dark:bg-darkBg font-base"
    >
      {/* Pricing Content */}
      <div className="relative z-10 mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Notiord is Free!
        </h2>
        <div className="grid grid-cols-1 gap-8 w900:grid-cols-1 w900:place-items-center w900:gap-12">
          <PricingPlan
            planName="Basic"
            description="Get started with Notiord for free"
            // price="0"
            free
            perks={[
              'Notification',
              'Create issues',
              'Search issues',
              'Comments on issues',
              'Customer feedback',
              'Customer support',
            ]}
          />
          {/* <PricingPlan
            planName="Business"
            description="Contact us for pricing"
            // price="25"
            perks={[
              'Notification Plus',
              'Enhanced Create issues',
              'Update issues',
              'Priority Customer support',
            ]}
            business={true}
            // mostPopular
          /> */}
          {/* 
          <PricingPlan
            planName="Growth"
            description="Lorem ipsum dolor sit amet"
            price="50"
            perks={[
              'Unlimited products',
              'Unlimited subscribers',
              'Advanced analytics',
              '1-hour, dedicated support response time',
              'Marketing automations',
              'Custom reporting tools',
            ]}
          /> */}
        </div>
      </div>
    </section>
  )
}
