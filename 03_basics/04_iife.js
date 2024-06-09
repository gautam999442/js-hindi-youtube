// Imediately Invoked Function Expressions (IIFE)
// ()() //sintax of  IIFE

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`)
})();

( (name) => {
   // Unmaned IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})('himanshu')

