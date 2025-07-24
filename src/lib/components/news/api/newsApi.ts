import {mockNews} from "$lib";
import type {ResponseAPI} from "$lib/components/common/types/api";

export const fetchNews: Promise<ResponseAPI> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            status: 'success',
            data: mockNews
        })
    }, 1500)
})