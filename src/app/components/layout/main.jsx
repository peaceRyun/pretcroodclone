import React from 'react';

const Main = ({ children }) => {
    return (
        <>
            <main className='flex-1 min-h-[500vh] overflow-visible relative'>{children}</main>
        </>
    );
};

export const Container = ({ children }) => {
    return (
        <section className='py-20 px-[20px]'>
            <div className='flex flex-col gap-5'>{children}</div>
        </section>
    );
};

export default Main;
