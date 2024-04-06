
num_array = [1,4,7,38,10,14,23210,43,56,10100, 189023]
max_num = 0
current_num = 0
median_num = 0
initial_num = 0
target = 56


if max(num_array) != target:
    current_num =  max(num_array)
    num_not_found = True

else:
    print(f"Target is {max(num_array)}")
    num_not_found = False



while num_not_found == True:



    if current_num == target:
        print(f"Target is {current_num}")

        for i in range(len(num_array)):
            if current_num == num_array[i]:
                print(f"position index is {i}")

        num_not_found = False

    elif target > current_num: 
        current_num = round((current_num + initial_num)/2)

    elif target < current_num: 
        initial_num = current_num
        current_num = round((current_num/2))









    