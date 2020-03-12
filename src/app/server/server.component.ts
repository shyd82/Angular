import {Component} from '@angular/core';

@Component ({
    selector:'app-server',
    templateUrl:'./server.component.html',
    // template:'<h2>hello Angular welcome Di</h2>',
    styleUrls:['./server.component.css']
    
})

export class ServerComponent {

    // Property
    firstName = 'Di';
    lastName = 'Ye';
    age ='32';


    // Methods:
    constructor(){
        // console.log('hello server component');

        this.sayHello();
       
        // this.hasBirthday();
        // console.log(this.age);

    }

    sayHello(){
        // console.log('Hello ${this.firstName}');
        console.log('Hello' + ' ' + this.firstName);

    }

    hasBirthday(){
        // this.age == this.age+1;
        // this.age += 1;
    }

}


