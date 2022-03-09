# Project Euler 005 - Smallest Multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

The aim is to find the smallest positive number that is *evenly divisible* by all of the numbers from 1 to n, where n is a positive number greater than or equal to 1.

Information at [Project Euler 005](https://projecteuler.net/problem=5)

## UX

**Getting Started**

Enter a whole number between 1 and 30 in the input field and click on the Submit Button.  You will see the number that you have entered as well as the smallest multiple from 1 to that number entered, unless you have made an invalid input.  For example, the smallest multiple from 1 to 3 is 6.

**User Stories**

As a user, I expect to get an error message, If I do any of:

    - Not enter anything in the input field
    - Entering text that is not a number (e.g. bus)
    - Entering a number less than 1 or greater than 30
    - Entering a number, but it is not an integer

As a user, I expect `smallestMult(5)` to return a number.

As a user, I expect `smallestMult(5)` to return 60.

As a user, I expect `smallestMult(7)` to return 420.

As a user, I expect `smallestMult(10)` to return 2520.

As a user, I expect `smallestMult(13)` to return 360360.

As a user, I expect `smallestMult(20)` to return 232792560.

**Information Architecture**

The function `smallestMult(n)` returns a number (integer), where `n` is between 1 and 30.

## Features

Allows the user to enter the number as well as getting the smallest multiple from 1 to that number.
For example, if the number was 3, the smallest multiple from 1 to 3 is 6.

Performs checks on valid user input.  If the input is not valid, an error message is displayed.

