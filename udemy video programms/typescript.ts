{
    let nm: string='Android'
    let bl: boolean=true
    let sal: number = 1000
    //object//

    let obj:{}={ key:7552}//object which is having key and value
    let obj1:{[key:number]:string}={1:'shital'}//we can assign this kind of objects which is restricted to its type like number and string in ts
    //functions//

    let fn:()=> void = ()=> console.log('This is awsome')//fn is hold the fun which does not hane any parameter which return void
    let fn1:(bl:boolean)=>string  = function(bl:boolean) {
        return 'boolean'
    } 
    //let fn1:(b1:boolean)=> string (b1:boolean) => 'true'//another way to write same function inline
       //this fun is a type of bollean which returning a string


     //mixed type of data
       let mixed:boolean | number | (()=>void) = true ///its a function which can support any type of variable boolean , numbe, string,function void

       //universal//
       let uni:any=()=> '' //hold any type of data

}


{
    // function calculate (mob:string): void | boolean {
         
    // }
    //calculate : '1567421'
    //calculate:'true'//
}