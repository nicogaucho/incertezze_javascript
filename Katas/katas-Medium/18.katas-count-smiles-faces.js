/*  count smiley-faces
- smiley faces rules: 
* each smiley face must contain a valid pair of eyes as : or ; 
* a smiley face can have a nose but it does not have to. Valid characters for nose are - or ~ 
* every smiley face must have a mouth marked with ) or D

example of smiley faces valid : 
:) or :D or ;-D or :~)

invalid smiley faces 
;( :> :} :] */


//contaSmileFace([])


let face = ':~';
let count = 0;

/* for (let i = 0; i < a.length; i++) {
  let face = a[i]
   if (face.length == 2 || face.length == 3) {
    if (face[i] == ':' || face[i] == ';') {
      if (face[i-1] == '-' || face[i-1] == '~') {
        if (face[i-2] == ')' || face[i-2] == 'D') {
          count++
        }
      } else if ((face[i-2] == ')' || face[i-2] == 'D') && face.length == 2) {
        count++
      }
    }
  } 
} */

if (face.length == 2 || face.length == 3) {
  if (face[0] == ':' || face[0] == ';') {
    if (face[1] == '-' || face[1] == '~') {
      if (face[2] == ')' || face[2] == 'D') {
        count++
      }
    } else if ((face[1] == ')' || face[1] == 'D') && face.length == 2) {
      count++
    }
  }
}

console.log(count);
