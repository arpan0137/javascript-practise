function x(){
    for( var i = 1; i<=5; i++){ // program should print 1,2,3,4,5 after 1,2,3,4,5 seconds respectively
        setTimeout(function () {
            console.log(i) // this prints 6,6,6,6,6 because of closure( variable i will be same for each iteration because memory is shared not values )
        },i*1000)
    }
}
x()
function y(){
    for( let i = 1; i<=5; i++){ // this will work correctly because let is block scoped
        setTimeout(function () {
            console.log(i)
        },i*1000)
    }
}
y()
function z(){
    for( var i = 1; i<=5; i++){ // this will also work correctly because we created closure for each iteration so variable i will be different for each iteration
        function close(x){
            setTimeout(function () {
                console.log(x)
            },x*1000)
        }
        close(i)
    }
}
z()