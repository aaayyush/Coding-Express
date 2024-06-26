import "./signin.css";

function SignIn() {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1>Sign In to Coding Express</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
        <p>
          Do not have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
