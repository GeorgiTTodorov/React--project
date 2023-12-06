const baseUrl = 'https://pureend.backendless.app/api/data/stories';


export const getAllStories = async () => {

    const response = await fetch(baseUrl);

    const result = await response.json();

    return result;
};

export const createStory = async (storyData) => {

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(storyData)
    });

    const result = await response.json();

    return result;
};
