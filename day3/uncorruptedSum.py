import re

# read txt file with data string
with open("data.txt", "r", encoding="utf-8") as file:
    data = file.read()

# the parentheses around \d{1,3} create a capturing group, which extracts only the numbers instead of the whole match.
pattern = r"mul\((\d{1,3}),(\d{1,3})\)"

# re.findall function in python used to search a string for all occurrences of a pattern and return them in a list
list = re.findall(pattern, data)
# format list to int from string
intList = [(int(x), int(y)) for x, y in list]

# multiply the elements of each tuple and sum the results
result = sum(x * y for x, y in intList)

print('the total summed results of the uncorrupted data is ', result)