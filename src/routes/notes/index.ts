import type { Note, Notes } from "$lib/types";

export async function GET() {
    let allNotes = await getNotes();

    return {
        status: 200,
        body: {
            allNotes
        }
    };
}

async function getNotes(): Promise<Notes[]> {
    let tags: Notes[] = [
        {
            name: "cheat-sheet",
            title: "Cheat Sheets",
            articles: []
        },
        {
            name: "data-structure",
            title: "Data Structures",
            articles: []
        },
        {
            name: "algorithm",
            title: "Algorithms",
            articles: []
        },
        {
            name: "raspberrypi",
            title: "Raspberry Pi",
            articles: []
        },
        {
            name: "blog",
            title: "Blogs",
            articles: []
        },

    ];

    const tagDict: { [name: string]: Note[] } = {}

    const articles: any = import.meta.glob('../*/*.md', { eager: true });
    for (const path in articles) {
        const { metadata } = articles[path];
      
        if (!metadata.tags) continue;
        if(metadata?.draft) continue;

        for (const tag of metadata.tags) {
            if (!tagDict[tag]) {
                tagDict[tag] = [];
            }
            tagDict[tag].push({
                title: metadata.title,
                path: path.slice(2, -3)
            });
        }
    }

    for (const tag of tags) {
        tag.articles = tagDict[tag.name];
    }

    return tags;
}
