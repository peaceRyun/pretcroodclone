import { PlanCard, PlanCardWhite } from '@/app/components/card/Card';
import React from 'react';

const PlanSection = () => {
    return (
        <>
            <section>
                <div className='title-area flex flex-col'>
                    <p className='font-proxima font-display3-h2 text-white uppercase mx-auto'>select a plan</p>
                    <div className='mt-10 p-5 flex flex-col gap-5'>
                        <PlanCard />
                        <PlanCardWhite category='Standalone' />
                        <PlanCardWhite category='Float' />
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlanSection;
