from bottle import *

with open('ajaxtest.js', 'r') as f:
    test_data = f.read()

def jsonp(request, dictionary):
    if (request.query.callback):
        return "%s(%s)" % (request.query.callback, dictionary)
    return "%s" % dictionary

@get('/')
def something():
    return jsonp(request, test_data)

run(host='localhost', port=5000)
