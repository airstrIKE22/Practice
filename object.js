let myDog ={
    coatType: 'fluffy',
    breed: 'Husky',
    color: 'white',
    size: 'medium',
    bark: function bark(){
    console.log('WOOF');
    },
    describeYourself: function describeYourself(){
    console.log('Hello I am a '+this.breed)
    }
}
console.log(myDog.coatType)
console.log(myDog.bark());
console.log(myDog.describeYourself())