import type { ReactNode } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText || error.data?.message || "Router error";
    }
    else if (error instanceof Error) {
        errorMessage = error.message;
    }
    else {
        errorMessage = 'Unknown error';
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorMessage}</i>
            </p>

            {isRouteErrorResponse(error) && (
                <p style={{ color: '#888' }}>Status: {error.status}</p>
            )}
        </div>
    )
}