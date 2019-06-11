import axios from 'axios';

const firebaseApiOptions = {
    baseURL: 'https://us-central1-psn-discount-tracker.cloudfunctions.net/',
};

class HttpService {
    constructor(options) {
        this.instance = axios.create(options);
    }

    async get(url, config) {
        const response = await this.instance.get(url, config);
        const { data } = await response;
        return data;
    }

    async post(url, payload, config) {
        const response = await this.instance.post(url, payload, config);
        const { data } = await response;
        return data;
    }

    async update(url, payload, config) {
        const response = await this.instance.put(url, payload, config);
        const { data } = await response;
        return data;
    }

    async delete(url, config) {
        const response = await this.instance.delete(url, config);
        const { data } = await response;
        return data;
    }
}

export default new HttpService(firebaseApiOptions);
