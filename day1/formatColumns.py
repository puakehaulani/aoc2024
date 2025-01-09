from data import data

# Split the data by lines
lines = data.splitlines()

# Initialize two lists for the columns
column_1 = []
column_2 = []

# Loop through each line and split the columns
for line in lines:
    col1, col2 = line.split()
    column_1.append(int(col1))  # Add column 1 to the list
    column_2.append(int(col2))  # Add column 2 to the list

def save_columns_to_file(column1, column2, filename="day1.1.output.txt"):
    # Convert columns into array format
    array1_str = f"column1 = {column1}"
    array2_str = f"column2 = {column2}"
    
    # Combine the arrays into a single output string
    output = array1_str + "\n" + array2_str
    
    # Write the output to the specified file
    with open(filename, "w") as file:
        file.write(output)
    print(f"Output saved to {filename}")

    
    
save_columns_to_file(column_1, column_2)