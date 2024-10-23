from flask import Flask
from flask import render_template

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/test')
def test():
    return render_template('test.html')

@app.route('/subpage')
def subpage():
    return render_template('sub_page.html')

if __name__ == '__main__':
    app.run(port=8080, debug=True, host='0.0.0.0')