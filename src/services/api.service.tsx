export class ApiService {
    url: string = '';

    constructor(url: string) {
        this.url = url
    }

    async fetchMessages() {
        try {
            const request = new Request(`${this.url}`, {
                method: 'get'
            })
            return await fetchRequest(request)
        } catch (error) {
            console.error(error)
        }
    }
}

async function fetchRequest(request: Request) {
    const response = await fetch(request)
    return await response.json()
}
