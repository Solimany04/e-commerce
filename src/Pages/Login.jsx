function Login() {
    return ( 
        <>
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/register">Register here</a></p>
        </>
    );
}

export default Login;