import { get, ref } from "firebase/database"
import db from "./firebase.config";

const refTickets = ref(db, "/tickets")

const getAllTickets = () => {

    return get(refTickets)
}

export default {
    getAllTickets
}