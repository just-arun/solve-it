# Python3 program to check if 
# any permutation of a large 
# number is divisble by 8 or not 

# Function to check if any 
# permutation of a large 
# number is divisible by 8 
def solve(n, l): 
	
	# Less than three digit 
	# number can be checked 
	# directly. 
	if l < 3: 
		if int(n) % 8 == 0: 
			return True
		
		# check for the reverse 
		# of a number 
		n.sort(reverse = True) 
		
		if int(n) % 8 == 0: 
			return True
		return False

	# Stores the Frequency of 
	# characters in the n. 
	hash = 10 * [0]
	for i in range(0, l): 
		hash[int(n[i]) - 0] += 1; 

	# Iterates for all 
	# three digit numbers 
	# divisible by 8 
	for i in range(104, 1000, 8): 
		dup = i 

		# stores the frequency 
		# of all single digit 
		# in three-digit number 
		freq = 10 * [0] 
		freq[int(dup % 10)] += 1; 
		dup = dup / 10
		freq[int(dup % 10)] += 1; 
		dup = dup / 10
		freq[int(dup % 10)] += 1; 
		
		dup = i 
		
		# check if the original 
		# number has the digit 
		if (freq[int(dup % 10)] > 
			hash[int(dup % 10)]): 
			continue; 
		dup = dup / 10; 
		
		if (freq[int(dup % 10)] > 
			hash[int(dup % 10)]): 
			continue; 
		dup = dup / 10
		
		if (freq[int(dup % 10)] > 
			hash[int(dup % 10)]): 
			continue; 
		
		return True

	# when all are checked 
	# its not possible 
	return False
	
# Driver Code 
if __name__ == "__main__": 
	
	number = "1604744988347761125513191682299161757147083970002856195455984812117842662961981488"
	
	l = len(number) 
	
	if solve(number, l): 
		print("Yes") 
	else: 
		print("No") 
		
# This code is contributed 
# by Harshit Saini 
