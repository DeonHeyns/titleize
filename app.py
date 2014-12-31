#!/usr/bin/env python
# -*- coding: utf-8 -*-

from sys import argv
import bottle
from bottle import route, get, view, static_file
import inflection

bottle.debug(False)


@route("/resources/<filepath:path>")
def resources(filepath):
    return static_file(filepath, root='resources')

@get('/')
@view('index')
def index():
    return {}

@get('/<word>')
def titleize(word):
    result = word
    try:
        result = inflection.titleize(word)
    except Exception, e:
        print(e)
    return result


bottle.run(host='0.0.0.0', port=argv[1])
