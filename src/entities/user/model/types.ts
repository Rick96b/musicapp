export type User = {
    id: string;
    email: string;
    login: string;
    password: string;
    recentlyPlayed?: string[];
}