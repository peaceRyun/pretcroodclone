import { PlanCard, PlanCardWhite } from '@/app/components/card/Card';
import { usePlanSectionAnimation } from '@/app/hooks/useGsapAnimation';
import React from 'react';

const PlanSection = () => {
    const { sectionRef, titleRef, addToCardsRef } = usePlanSectionAnimation();

    return (ㄴㄴㄴㄴ
        <section ref={sectionRef} className='layout-plan-wrap'>
            <div className='flex flex-col'>
                <p ref={titleRef} className='font-proxima font-display3-h2 text-white uppercase mx-auto'>
                    select a plan
                </p>
                <div className='layout-plan mt-10 p-5 flex flex-col gap-5 lg:flex-row lg:mx-auto'>
                    <PlanCard ref={addToCardsRef} />
                    <div ref={addToCardsRef}>
                        <PlanCardWhite category='Standalone' />
                    </div>
                    <div ref={addToCardsRef}>
                        <PlanCardWhite category='Float' ref={addToCardsRef} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlanSection;
