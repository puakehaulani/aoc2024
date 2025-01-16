//https://adventofcode.com/2024/day/1 (unlocks after completing first part)

import { column1, column2 } from './day1.1.output'

const calculateSimilarityScore = (arr1, arr2) => {
	let calculateSimilarityScore = 0

	// loop through each item in first array
	for (let i = 0; i < arr1.length; i++) {
		// get number of occurrances of that item in second array
		const occurrences = arr2.filter(item => item === arr1[i]).length
		// multiply number of occurrances by value of that item
		// add to the total
		calculateSimilarityScore += arr1[i] * occurrences
	}
	return calculateSimilarityScore
}

console.log(
	'the similarity score between the two arrays is ',
	calculateSimilarityScore(column1, column2)
)
