const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let capitals = tutorials.map((tutorial)=>{
    const words = tutorial.split(" "); 
    console.log("words",words);
    const capWord = words.map((word)=> {
      let capitalizeFirstLetter=word[0].toUpperCase() + word.substring(1); 
      console.log("word",word)
      console.log("capitalizedWord",capitalizeFirstLetter)
      return capitalizeFirstLetter
    });
    console.log("capWord",capWord)

    const capitalizedWords=capWord.join(" ");
    console.log("capString",capitalizedWords)
    return capitalizedWords;
  })
  console.log("capitals",capitals)
  return capitals;  
}
