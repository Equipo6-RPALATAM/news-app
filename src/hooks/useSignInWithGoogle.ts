import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
const useSignInWithGoogle = () => {
  const signInWithGoogle = () => {
    console.log('Login button clicked')
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        // The signed-in user info.
        const user = result.user
        // ...
        console.log(token)
        console.log(user)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
        console.log(errorCode)
        console.log(errorMessage)
        console.log(email)
        console.log(credential)
      })
  }
  return {
    signInWithGoogle,
  }
}