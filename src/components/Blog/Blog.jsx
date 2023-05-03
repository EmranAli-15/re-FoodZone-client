import React from 'react';

const Blog = () => {
    return (
        <div className='md:px-8 my-10'>
            <section>
                <h1 className='text-2xl mb-2'>1. What is the differences between uncontrolled and controlled components ?</h1>
                <p className='text-lg ms-4'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM elements current value and update the state accordingly.</p>
            </section>
            <section className='my-8'>
                <h1 className='text-2xl mb-2'>2. How to validate React props using PropTypes ?</h1>
                <p className='text-lg ms-4'>The PropTypes utility exports a wide range of validators for configuring type definitions. Below, we’ll list the available validators for basic, renderable, instance, multiple, collection, and required prop types. <br /> Below are the validators for the basic data types:</p>
                <ul className='text-lg ms-14 mt-2 list-disc'>
                    <li>PropTypes.any: The prop can be of any data type</li>
                    <li>PropTypes.bool: The prop should be a Boolean</li>
                    <li>PropTypes.number: The prop should be a number</li>
                    <li>PropTypes.string: The prop should be a string</li>
                    <li>PropTypes.func: The prop should be a function</li>
                    <li>PropTypes.array: The prop should be an array</li>
                    <li>PropTypes.object: The prop should be an object</li>
                </ul>
            </section>
            <section>
                <h1 className='text-2xl mb-2'>3. What is the difference between nodejs and express js ?</h1>
                <p className='text-lg ms-4'>Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node.js is detailed as A platform built on Chrome JavaScript runtime for easily building fast, scalable network applications.</p>
            </section>
            <section className='mt-8'>
                <h1 className='text-2xl mb-2'>4. What is a custom hook, and why will you create a custom hook?</h1>
                <p className='text-lg ms-4'>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                <p className='text-lg ms-4'>If you have one or multiple React hooks that will be used at multiple locations in a code, you should use custom React JS hooks. This helps in making the code more readable and make the code clean.</p>
            </section>
        </div>
    );
};

export default Blog;