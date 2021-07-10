class ApiService {
    url: string = '';

    constructor(url: string) {
        this.url = url
    }

    async fetchPosts() {
        try {
            const request = new Request(`${this.url}`, {
                method: 'get'
            })
            return fetchRequest(request)
        } catch (error) {
            console.error(error)
        }
    }
}

async function fetchRequest(request: Request) {
    const response = await fetch(request)
    return await response.json()
}

export const apiService = new ApiService('https://edikdolynskyi.github.io/react_sources/messages.json');
