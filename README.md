# Advent of Code 2024

This repository contains my working solutions for the Advent of Code 2024 challenges. Advent of Code is an annual event that provides daily programming puzzles throughout the month of December.

## Commands quick reference
to compile typescript and run solution in terminal for submission: `tsc <filename>.ts && node <filename>.js`  
to run python helper files: `python3 <filename>.py`

### Python helper example
```
def functionName(prop1, prop2, filename="day<X>.<X>.output.ts"):
    # logic here. !important: add f"export const ..." for usage in ts file. example: convert columns into array format
    array1_str = f"export const column1 = {prop1}"
    array2_str = f"export const column2 = {prop2}"

    # create a single output string. example: combine the arrays into a single output string
    output = array1_str + "\n" + array2_str
    
    # Write the output to the specified file
    with open(filename, "w") as file:
        file.write(output)
    print(f"Output saved to {filename}")
```

## Acknowledgments

- [Advent of Code](https://adventofcode.com/) by Eric Wastl

