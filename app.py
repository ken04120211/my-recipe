from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--port', type=int, default=53749, help='Port to run the app on')
parser.add_argument('--host', type=str, default='0.0.0.0', help='Host to run the app on')
args = parser.parse_args()

app.run(host=args.host, port=args.port)