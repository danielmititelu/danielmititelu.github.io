export type Tag = {
    name: string;
    title: string;
    articles: Article[];
}

export type Article = {
    title: string;
    path: string;
}
