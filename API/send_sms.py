# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = "ACed41a6c1779074ef69c9efbaa8b2b86a"
auth_token = "72c3e5238bb27c1c0d9b2411a9af9817"
client = Client(account_sid, auth_token)

message = client.messages.create(
    body="Join Earth's mightiest heroes. Like Kevin Bacon.",
    from_="+18559350411",
    to="+15618064557",
)

print(message.sid)