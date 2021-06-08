//  console.log(global);


 global.setTimeout(() => {
     console.log('in the timeout');
     clearInterval(int); //stop interval
 }, 3000);

 const int = setInterval(() => {
        console.log('in the interval')
 }, 1000)


 console.log(__dirname);// show direct file
 console.log(__filename); //show name file

