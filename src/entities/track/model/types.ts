export type TrackType = {
    id: number
    avatarLink: string;
    name: string;
    authorName: string;
    durationInSeconds: number;
    trackLink: string;
}

export type ActiveTrackType = TrackType & {
    completedDurationInSeconds: number;
    isPlaying: boolean;
}