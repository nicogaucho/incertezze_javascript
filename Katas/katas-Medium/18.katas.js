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


let a = ':-)';
let count = 0;

for (let i = 0; i < a.length; i++) {
  let face = a[i]
   if (face.length == 2 || face.length == 3) {
    if (face[i] == ':' || face[i] == ';') {
      if (face[i-2] == '-' || face[i-2] == '~') {
        if (face[i-1] == ')' || face[i-1] == 'D') {
          count++
        }
      } else if ((face[i-2] == ')' || face[i-2] == 'D') && face.length == 2) {
        count++
      }
    }
  } 
}

console.log(count);
