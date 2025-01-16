from data import data


# Split the data by lines
lines = data.splitlines()

# Loop through each line and split by space
formatted_lines = [[int(value) for value in line.split()] for line in lines]

def save_to_file(arr, filename="day2.1.output.ts"):
    # format array as export string for ts file
    output = f"export const reports = {arr}"

    # Write the output to the specified file
    with open(filename, "w") as file:
        file.write(output)
    print(f"Output saved to {filename}")


# save the array of arrays
save_to_file(formatted_lines)