class Citizen:
    """
    Represents a citizen with first name and last name.

    Attributes:
        first_name (str): The first name of the citizen.
        last_name (str): The last name of the citizen.
        greeting (str): A class variable set to "For the glory of Python!"
    """

    greeting = "For the glory of Python!"

    def __init__(self, first_name: str, last_name: str):
        """
        Initializes a Citizen instance with first name and last name.

        Args:
            first_name (str): The first name of the citizen.
            last_name (str): The last name of the citizen.
        """
        self.first_name = first_name
        self.last_name = last_name

    def full_name(self) -> str:
        """
        Returns the full name of the citizen.

        Returns:
            str: The full name (first name + last name) of the citizen.
        """
        return f"{self.first_name} {self.last_name}"
