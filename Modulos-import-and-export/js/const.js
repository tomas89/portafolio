
function cube(x) {
    return x * x * x;
  }
  const foo = Math.PI + Math.SQRT2;
  var graph = {
      options:{
          color:'white',
          thickness:'2px'
      },
      draw: function(){
          console.log('From graph draw function');
      }
  }





  function ToMakeFriends(){
     console.log("This function to teach how to make friends :D ;)"); 
  }


  export default class Myfunction{
    constructor(){
      console.log("This is my Test function Class with modules ES6 DX");
    }  
}




  //export default const pass = "Queteimporta:P"; en este caso nos marca error ya que no es posible con const ni con let debido a que es es una expresion expresada

 // let pass = "Noteladigo";
 // export default pass;





  export { ToMakeFriends, cube, foo, graph };