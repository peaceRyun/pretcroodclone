import { PlanCard, PlanCardWhite } from '@/app/components/card/Card';
import React from 'react';

const PlanSection = () => {
    return (
        <>
            <section className='layout-plan-wrap'>
                <div className='flex flex-col'>
                    <p className='font-proxima font-display3-h2 text-white uppercase mx-auto'>select a plan</p>
                    <div className='layout-plan mt-10 p-5 flex flex-col gap-5 lg:flex-row'>
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
