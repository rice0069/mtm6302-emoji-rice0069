
// Creates Array that stores all the emoji HTML codes
const emojiList = [
    "&#128557;",
    "&#128162;",
    "&#128052;",
    "&#127793;",
    "&#128020;",
    "&#128009",
    "&#128128;",
    "&#128025;",
    "&#8987;",
    "&#127914;",
    "&#128154;",
    // For some reason the joystick emoji needs both of these HTML codes.
    "&#128377;&#65039;"
]
   // 
function displayEmojis(emoji) {

    // i starts at 0, and while i is less then 12, keeping going through every array item individually
    for (let i = 0; i < 12; i++) {
        
        // While looking up how to only display numbers in a string in order to display the emoji codes, I learned about this thing called "RegExp \D Metacharacter (/\D/g)", which finds all the non-digit characters in a string, and I used the replace method to replace all non-digit characters in the string with nothing, which results in only getting the actual numbers used in the Emoji codes in my array and deletes the '&#' from the beginning and the ';' from the end of the array items.   
        const emojiCode = emojiList[i].replace(/\D/g, '')

      //Creates the divs inside the main section in the HTML with the id of 'grid' and fills them with the emojis and their codes.  
      document.getElementById('grid').innerHTML += `
      <div class='cells'>
        <p>${emojiList[i]}</p>
        <br>
        <code>${emojiCode}</code>
      </div>`
    }
}


displayEmojis();
