import { collection, getDocs, query, where } from "firebase/firestore"; 
import { firebase } from "shared/api/firebase"
import { TrackType } from "../model/types";

const tracksRef = collection(firebase.database, "tracks");

export const fetchAllTracks = async (callback: React.Dispatch<React.SetStateAction<TrackType[] | null>>) => {
    let currentTracks: TrackType[] = [];
    (await getDocs(tracksRef)).forEach(doc => currentTracks.push(doc.data() as TrackType))
    return currentTracks;
}

export const fetchCurrentTracksById = async (tracksId: string[] | undefined) => {
    if(!tracksId) return []
    let currentTracks: TrackType[] = [];
    const currentTracksQuery = query(tracksRef, where("id", "in", tracksId));
    (await getDocs(currentTracksQuery)).forEach(doc => currentTracks.push(doc.data() as TrackType))
    return currentTracks;
}