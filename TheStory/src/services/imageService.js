const baseUrl = 'https://pureend.backendless.app/api/data/images';

export const getAllImages = async () => {

    const response = await fetch(baseUrl);

    const result = await response.json();

    return result;
};

export const getOneImage = async (imageId) => {

    const response = await fetch(baseUrl + '/' + imageId);

    const result = await response.json();

    return result;
};

export const createImage = async (imageData) => {

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(imageData)
    });

    const result = await response.json();

    return result;
}