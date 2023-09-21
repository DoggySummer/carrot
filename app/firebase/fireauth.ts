import { getAuth } from "firebase/auth"
import firebasedb from "./firebasedb"

const auth = getAuth(firebasedb)

export default auth
