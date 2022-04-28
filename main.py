
from flask import Flask, jsonify

app=Flask(__name__)

@app.route("/")
def home():
    f = open("index.html")
    text = f.read()
    f.close()
    return text
    
@app.route("/question")
def sendQuestion():
    d = {
        "que":"who is the father of computing???",
        "ans":["Charls Babage","C V Raman","Vint Cerf","Alan Turing"]
    }
    return jsonify(d)

@app.route("/answer/<op>")
def checkAnswer(op):
    if op=="1":
        d = {"answer":True}
    else:
        d = {"answer":False}
    return jsonify(d)        

@app.route("/<name>")
def user(name):
    if name.endswith(".css") or name.endswith(".js"):
        f = open(name)
        text = f.read()
        f.close()
        return text
    else:
        return f"Hello {name}"
        
if __name__ == "__main__":
    app.run(debug=True)