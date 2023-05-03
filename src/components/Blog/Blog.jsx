import React from 'react';

const Blog = () => {
    return (
        <div>
            <section>
                <h1>What is the differences between uncontrolled and controlled components ?</h1>
                <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM elements current value and update the state accordingly.</p>
            </section>
            <section>
                <h1>How to validate React props using PropTypes ?</h1>
                
            </section>
        </div>
    );
};

export default Blog;