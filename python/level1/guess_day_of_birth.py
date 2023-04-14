day_of_birth: int = 17
user_input: int = int(input("Guess the day of birth: "))
while user_input != day_of_birth:
    print("Incorrect guess")
    user_input: int = int(input("Guess the day of birth: "))

print("Correct guess.")
