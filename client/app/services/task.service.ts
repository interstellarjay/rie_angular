import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {
    constructor(private http:Http){
        console.log('Task Service Initialized');
    }
    
    getTasks() {
        return this.http.get('//localhost:8080/api/tasks')
            .map(res => res.json());
    }
    
    addTask(newTask){
        var headers =  new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('//localhost:8080/api/task', JSON.stringify(newTask), { headers: headers})
            .map(res => res.json());
    }
    
    updateStatus(task) {
        console.log("Running Update Service");
        var headers =  new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('//localhost:8080/api/task/'+task._id, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }
    
    deleteTask(id){
        return this.http.delete('//localhost:8080/api/task/'+id)
            .map(res => res.json());
    }
    
    
}
