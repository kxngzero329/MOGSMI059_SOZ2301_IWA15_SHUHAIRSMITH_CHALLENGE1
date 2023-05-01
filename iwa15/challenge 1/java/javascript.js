// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
/*
 * i deconstructed the data 
 * IT HAS have more control over the arrays
 */

const [...first] = data.lists[0][1]
const [... second  ] = data.lists[1][1] 
const [...third ]= data.lists[2][1]

const result = []
/**
 *  fixed the length termnology and then
 *  fixed some of the if statements
 *
 */
const extractBiggest = () => {
	if (first[first.length-1] > second[second.length-1]) {
		 return first.pop()
        first[first.length-1] 
        
	}

	if ( second[second.length-1]>=1) {
		return   second.pop()
         second[second.length-1] 
        
	}else{
   
	return third.pop()
 third[third.length-1]
    }

}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
  
