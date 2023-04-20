import { createClient } from "next-sanity"

const client = createClient({
    projectId: 'jzzl1etj',
    dataset: 'production',
    apiVersion: "2022-03-25",
    useCdn: false,
});

export const fetchQuery = async (query) => {
    const res = await client.fetch(query);
    return res;
};
