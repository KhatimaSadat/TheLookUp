const LogIn = () => {
    return (  
        <div className="login">
            <h2>Sign In</h2>
            <form>
                
                <input type="text" placeholder="User Name or Email"></input>
                <input type="text" placeholder="Password"></input>
                <button>Log IN</button>
            </form>
        </div>
    );
}
 
export default LogIn;