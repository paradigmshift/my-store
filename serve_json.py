from bottle import *

with open('clientData.js', 'r') as f:
    client_data = f.read()

with open('receipts.js', 'r') as f:
    receipts = f.read()

def jsonp(request, dictionary):
    if (request.query.callback):
        return "%s(%s)" % (request.query.callback, dictionary)
    return "%s" % dictionary

@get('/')
def something():
    return jsonp(request, client_data)

@route('/receipt/:id')
def something(id):
    return jsonp(request, receipts)

run(host='localhost', port=5000)
