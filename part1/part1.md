## Part 1a
1. Line 9 prints 20.
2. Line 13 also prints 20 because result is of var type so it can be accessed anywhere in the function, despite what block it is in.
3. If line 13 is deleted, line 9 would print 20. However, there is an error cause by line 13 trying to access a let variable outside of the block it is defined in.
4. Line 13 causes an error because it is of type let so it cannot be accessed outside of the block of code it is defined in.
5. Because of line 7, this code produces an error because it is declaring result as a const variable, but then tries to change the value which is not allowed.
6. This code returns an error because in addition to the answer in question 5, const is also similar to let in that it cannot be accessed outside of the block of code it is defined in.

## Part 1b
1. line 12 will print out 3 because i is declared as a var variable meaning it can be accessed anywhere in the function despite which block of code it is in. The reason the value is 3 is because the for loop loops only while i is less than the length of the prices array. Since there are three values in the array, i increments 3 times.
2. line 13 will print out 150 because discountedPrice is also a var variable and so despite being declared in the for loop, it can be accessed outside of the loop as well. The reason the value is 150 is because the discountedPrice gets re-declared and re-initialized each time the for loop loops. Since the last value in the prices array is 300, discountedPrice is printed out after its last initialization of being set to 300 * (1 - 0.5) which is equal to 150.
3. line 14 will print out 150 as well because the finalPrice continues to be set to the last price passed into the prices array. Once the for loop finishes being executed, the finalPrice is assigned to the value of the price of 300 discounted to 150. The finalPrice is also a var variable so it will not cause an error because it can be accessed and modified from any part of the function.
4. The function will return an array of the discounted prices: [50, 100, 150]. Tihs is because discounted is set to [] which is an empty array. Throughout the function in the for loop, the program continues to add on each discounted price to the array. Once the program has looped through all the prices in the prices array passed into the function, the function returns the final discounted array of the modified prices.
5. This code causes an error because the i variable is declared as a 'let' variable and therefore cannot be accessed outside of the for loop it is declared in.
6. This code will cause an error because discountedPrice is a 'let' type variable and was declared within the for loop. Therefore, when line 13 tried to print it out, the program was unable to find it because it was being called outside of its scope.
7. Line 14 will print out 150 because finalPrice is declared within the same block as the one it is being printed out on. The for loop continues to update finalPrice to the last discountedPrice it calculates. So, the result would be 150 since the last price in the prices array is 300 and the discount is 50% off.
8. This function would return an array of the calculated discounted prices: [50, 100, 150] because it passes in ([100, 200, 300], 0.5) so each of these prices would end up being half their original price.
9. This code produces an error because line 11 is trying to print out i which is a 'let' type variable and so it cannot be accessed outside of its for loop. 
10. Line 12 will print out 3 because length is declared as a 'const' type within the same block and it is set to the length of the prices array which has 3 elements.
11. This function will return an array of the discounted prices: [50, 100, 150]. This is because the program has a for loop that goes through each element in the array and first calculates the discount, then pushes that new price onto the discounted array. This array is then returned at the end of the program.
12. A) student.name 
    B) student['Grad Year']
    C) student.greeting()
    D) student['Favorite Teacher'].name
    E) student.courseLoad[0]
13. A) '32' since integers map to their exact string representation
    B) 1 since strings are converted to numbers
    C) 3 since null maps to 0
    D) '3null' since null maps to its exact string representation
    E) 4 since true maps to 1
    F) 0 since false and null both map to 0
    G) '3undefined' since undefined gets mapped to its exact string representation
    H) NaN since the conversion failed
14. A) true since '2' gets converted to a number
    B) false since '1' is smaller than '2'
    C) true since '2' becomes a number and 2 is equal to 2
    D) false since this is strict equality and the types of these two values are not equal
    E) false since true == 1 not 2
    F) true since Boolean(2) returns true since we are passing in a value that does not map to false so true == true
15. == will use type conversion if necessary to determine whether the values map to the same values. === is a strict equality check so it checks for the type of the values as well meaning if two values map to the same value but of are different types, === will return false.
16. (in another file)
17. The result will be [2, 4, 6]. First, modifyArray is called with two arguments: the array [1, 2, 3] and the function doSomething. In this modifyArray function, a new array is declared and then the function goes into a for loop that loops the amount of times equal to the amount of elements in the 'array' array. At each iteration, the callback function is called for each element of the array. This callback function is the doSomething function that takes in the array element and multiples it by 2. After this function is called, the new value is pushed into the newArr. After going through each element and pushing it onto the newArr array, the newArr is returned.
18. (in another file)
19. The output of this function is:
    1
    4
    3
    (1 second later): 2
    This is because the function automatically prints out the 1 and the 4 and then the next numbers to be printed out have a timeout time assigned to them. 3 has a timeout timer of 0 so it gets printed at the same time as 1 and 4, but after 4 because of the timeout. Then 2 gets printed out 1 second or 1000 milliseconds later.