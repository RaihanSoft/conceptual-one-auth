import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const Home = () => {
  const Googleprovider = new GoogleAuthProvider();
  const Githubprovider = new GithubAuthProvider();

  const handleGoogle = () => {
    signInWithPopup(auth, Googleprovider)
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }
  const handleGithub = () => {
    signInWithPopup(auth, Githubprovider)
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }


  return (
    <div>
      <div className="flex items-center justify-center " >
        <button onClick={handleGoogle} className="btn bg-neutral text-white" >Google Login</button>
      </div>
      <div className="flex items-center justify-center " >
        <button onClick={handleGithub} className="btn bg-neutral text-white" >Github Login</button>
      </div>
    </div>
  )
}

export default Home
