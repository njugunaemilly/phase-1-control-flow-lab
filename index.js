const distance = 199;

function scuberGreetingForFeet(distance){
  
if (distance<= 400){
  return 'This one is on me!';     
}
else if (distance <= 2500){

  return 'I will gladly take your thirty bucks.';
}
else if (distance > 2500){
  return 'No can do.'
}

}

function ternaryCheckCity(city){
   // Write your code here!

   return (city==='NYC' ? ("Ok, sounds good.") : ("No go."))
}

const tip = 'generous';

let cheers;

function switchOnCharmFromTip(tip){  
      // Write your code here!
  
      switch (tip){
        case 'generous':
        cheers = 'Thank you so much.';
        break;

        case 'not as generous':
        cheers = 'Thank you.'
        break;

        default:
          cheers = 'Bye.';
          break
      }
      return cheers;
}