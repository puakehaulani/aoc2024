// https://adventofcode.com/2024/day/2

import { reports } from './day2.1.output'

const safeReports = data => {
	// create counter var for number of safe reports
	let safeCounter = 0
	// loop through array
	for (let i = 0; i < data.length; i++) {
		// rule 1: all increasing OR all decreasing
		const isIncreasing = data[i].every((num, idx, arr) => {
			return idx === 0 || num > arr[idx - 1]
		})
		const isDecreasing = data[i].every((num, idx, arr) => {
			return idx === 0 || num < arr[idx - 1]
		})
		// if fails, continue
		if (!isIncreasing && !isDecreasing) {
			continue
		}
		// if passes, check rule 2
		// rule 2: difference from previous number is between 1 and 3
		const acceptableRange = data[i].every((num, idx, arr) => {
			return (
				idx === 0 ||
				(1 <= Math.abs(num - arr[idx - 1]) && Math.abs(num - arr[idx - 1]) <= 3)
			)
		})
		// if fails, continue
		if (!acceptableRange) {
			continue
		}
		// if passes, increment counter
		safeCounter += 1
	}

	// return safeReports counter
	return safeCounter
}

// print safeReports counter
console.log('the number of safe reports is ', safeReports(reports))

// NOTES
// first problem encountered, data was formatted as arrays of strings not numbers, so behaving not as expected. refactored python function to properly export data as numbers
// second problem encountered, implementing early returns incorrectly
// third problem encountered, forgot to include lower bound of acceptable range of numbers
