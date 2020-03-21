import { Component } from '@angular/core';

import { User } from '../models/User';

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

    foo:any;
    hasKids:boolean;
    numberArray:number[];
    kidsArray:string[];



    // mapping the object and interface
    user : User


    // Methods:
    constructor(){
        // console.log('hello server component');

        this.sayHello();
       
        // this.hasBirthday();
        // console.log(this.age);

        this.foo = 777;

        this.hasKids = true;

        this.kidsArray = ['Schubert.Ye','Catherine.Ye']


        this.user = {
            firstName: 'Micheal',
            lastName: 'Ye',
            age : 32,
            address: {
                street : '225 Clarksburg',
                city : 'Clarksburg',
                state : 'MD',
                zipcode:20871

            }
        }

    }

    sayHello(){
        // console.log('Hello ${this.firstName}');
        console.log('Hello' + ' ' + this.firstName);

    }

    hasBirthday(){
        this.age == this.age+1;
        // this.age += 1;
    }

}




// interface的内容写在所有的外部：
// 或者另起一个文件夹，名为models，将所有的interface、class、model class全部放在里面，后缀名是.ts ：

// interface User {
//     firstName:string;
//     lastName: string;
//     age:number;
//     address:{
//         street:string,
//         city:string,
//         state:string
//     }
// }