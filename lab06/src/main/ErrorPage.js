const ErrorPage = ({ error }) => {
    return (<>
                <p>Sorry, something went wrong...</p>
                <p>{error}</p>
            </>)
};

export default ErrorPage;