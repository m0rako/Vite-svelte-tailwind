export interface ResponseAPI<T> {
    status: 'success' | 'error',
    data: T
}