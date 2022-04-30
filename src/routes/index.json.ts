export async function get() {
    var postGroups = await getPosts();


    return {
        status: 200,
        body: {
            message: "hello world",
            postGroups
        }
    };
}

async function getPosts(): Promise<PostsGroup[]> {
    const postGroups: PostsGroup[] = [];

    const allPostFiles = import.meta.glob(`./*/*.md`);
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(2, -3);
            const groupTitle = postPath
                .match(/.*\//)[0] // take everything before the last slash
                .slice(0, -1) // remove the last slash
                .replace("-", " ") // replace dashes with spaces
                // uppercase the first letter of each word
                .replace(/\b\w/g, function (l) { return l.toUpperCase() });

            return {
                groupTitle,
                title: metadata.title,
                path: postPath,
            }
        })
    );

    allPosts.forEach(post => {
        const group = postGroups.find(group => group.title === post.groupTitle);
        var postMeta = { title: post.title, path: post.path };
        if (group) {
            group.posts.push(postMeta);
        } else {
            postGroups.push({
                title: post.groupTitle,
                posts: [postMeta]
            });
        }
    });

    return postGroups;
}


export type PostsGroup = {
    title: string;
    posts: Post[];
}

export type Post = {
    title: string;
    path: string;
}
