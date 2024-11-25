import React from 'react'

const JsonView = ({ document }) => {
    const jsonData = document?.displayed || {};
    return (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    );
}

export default JsonView