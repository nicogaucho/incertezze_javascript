function doYouLike(frontend, language) {
 return frontend ? `I really like ${language}` : `I like more ${language}`;
}

console.log(doYouLike(true, 'javascript'));
console.log(doYouLike(false, 'PHP'));