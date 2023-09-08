import { ref, onValue } from "firebase/database";
import { firebase } from "shared/api/firebase"
import { TrackType } from "../model/types";

export const fetchAllTracks = (callback: React.Dispatch<React.SetStateAction<TrackType[] | null>>) => {
    const tracksRef = ref(firebase.database, 'tracks')
    onValue(tracksRef, (snapshot) => {
        callback(Object.values(snapshot.val()))
    }, {
        onlyOnce: true
    });
}