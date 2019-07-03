import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//Env
import { environment } from '../../environments/environment'

@Injectable()
export class EmployeeApi {

    constructor(private httpClient: HttpClient) {

    }

    getAll() {
        return this.httpClient.get(`${environment.apiUrl}/employees`)
    }

    getById(id: string) {
        return this.httpClient.get(`${environment.apiUrl}/employee/${id}`)
    }

    create(employee: any) {
        return this.httpClient.post(`${environment.apiUrl}/create`, JSON.stringify(employee))
    }

    update(id: string, employee: any) {
        return this.httpClient.put(`${environment.apiUrl}/update/${id}`, JSON.stringify(employee))
    }

    delete(id: string) {
        return this.httpClient.delete(`${environment.apiUrl}/delete/${id}`)
    }

}