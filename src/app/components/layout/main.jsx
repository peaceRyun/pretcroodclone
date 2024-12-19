import React from 'react';

const Main = ({ children }) => {
    return (
        <>
            <main className='flex-1 min-h-screen relative'>{children}</main>
        </>
    );
};

export const Container = ({ children }) => {
    return <section className='cont'>{children}</section>;
};

export default Main;
