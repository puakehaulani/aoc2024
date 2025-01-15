// https://adventofcode.com/2024/day/1
import { column1, column2 } from './day1.1.output'

const findDistace = (arr1, arr2) => {
	let totalDistance = 0

	const sortedArr1 = arr1.sort((a, b) => a - b)
	const sortedArr2 = arr2.sort((a, b) => a - b)

	for (let i = 0; i < sortedArr1.length; i++) {
		totalDistance += Math.abs(sortedArr1[i] - sortedArr2[i])
	}

	return totalDistance
}

console.log(
	'the distance between the two arrays is ',
	findDistace(column1, column2)
)
