from flask import Flask
from flask import request
app = Flask(__name__)

@app.route("/server/message", methods=['POST'])
def message():
    with open("../messages.txt", "a") as myfile:
        myfile.write(str(request.data) + '\n')
    return 'ok'

if __name__ == "__main__":
    app.run()
