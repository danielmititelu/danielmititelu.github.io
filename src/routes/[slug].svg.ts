export async function GET({ params }) {
    const images = import.meta.glob(['../**/*.svg'], { as: 'raw', eager: true });
    let imageData: string;
    for (const imagPath in images) {
        if (imagPath.includes(params.slug)) {
            imageData = images[imagPath];
        }
    }

    return {
        status: 200,
        headers: { 'Content-Type': 'image/svg+xml' },
        body: imageData,
        type: "default"
    };
}