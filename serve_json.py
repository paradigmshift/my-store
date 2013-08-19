from bottle import *

with open("/Users/mozartreina/dev/js/my-store/ajaxtest.js", "r") as f:
    data = f.read()
    
@get('/')
def serve_json():
    return data

run(host='localhost', port=4000)
