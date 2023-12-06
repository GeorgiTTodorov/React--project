const baseUrl = 'https://pureend.backendless.app/api/data/images';

export const getAllImages = async () => {

    const response = await fetch(baseUrl);

    const result = await response.json();

    return result;
}