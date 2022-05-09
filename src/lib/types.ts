export type Notes = {
    name: string;
    title: string;
    articles: Note[];
}

export type Note = {
    title: string;
    path: string;
}
