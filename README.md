### Technical Screening Exercise

Thank you for taking the time to participate in this challenge. Please read carefully all the instructions below and don’t
hesitate to contact us in case of any doubt. You should **use the programming language and tools that you feel
more comfortable with**, so we’ll be able to see your full potential. You should **NOT** find this exercise to be particularly
difficult. It is designed to be a **straightforward** coding exercise, and it should take you no more than **90 minutes**.

### Things we are very picky about:

* **Test Coverage** – the solution must be developed using TDD (test-first) and with excellent unit test coverage.
* **Simplicity** – We value simplicity as an architectural virtue and a development practice. Solutions should
reflect the difficulty of the assigned task, and should **NOT** be overly complex. Layers of abstraction, patterns,
or architectural features that aren’t called for **should NOT be included**.
* **Self-explanatory code** – the solution must speak for itself. Multiple paragraphs explaining the solution are a
sign that isn’t straightforward enough to understand purely by reading the code.
* **Should be easy to run** the program and tests from the command line. If you need supporting scripts, feel free
to add them to your submission

### Instructions

##### Step 1

Please keep the code for this step in a separate folder called: Step1
Write a program that produces the following for any contiguous range of numbers:

* the number
* 'fizz' for numbers that are multiples of 3
* 'buzz' for numbers that are multiples of 5
* 'fizzbuzz' for numbers that are multiples of 15

e.g.: if I run the program I should get the following result:
```
$ fizzbuzz 2 16
2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16
$ fizzbuzz -3 -1
fizz -2 -1
```

##### Step 2

Please keep the code for this step in a separate folder called Step 2. Copy the code from Step 1 and change it, do not
extend or import it from the Step 1 folder.

Change the code in this new folder to perform the following:

* If the number contains a three you must output the text 'lucky'
* This overrides any existing behaviour

e.g.: If I run the program I should get the following output:

```
$ fizzbuzz 2 14
2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 1
```

##### Step 3


Please keep the code for this step in a separate folder called Step 3. Copy the code from Step 2 and change it, do not
extend or import it from the Step 2 folder.

Finally, change the code in this new folder to perform the following:

* Produce a report at the end of the program showing how many times the following were output
  * fizz
  * buzz
  * fizzbuzz
  * lucky
  * an integer

e.g.: if I run the program I should get the following output:

```
$ fizzbuzz 1 20
1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 14 fizzbuzz 16 17 fizz 19 buzz
 fizz: 4 buzz: 3 fizzbuzz: 1 lucky: 2 integer: 10
```

(integer is 10 because there were 10 numbers that were not altered in any way)

### Code submission

Please submit your code in three different zip files, one for each step. You just need to click on the link from the email
you got in order to submit your solution.

Please write code that you would be happy delivering to a paying client.

Please **provide an automated build file** that compiles your code and runs the tests. Submissions without an
automated build will not be accepted.