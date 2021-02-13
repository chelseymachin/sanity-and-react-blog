import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "5sv33dvj",
    dataset: "production",
    useCdn: true,
});