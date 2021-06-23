#!/bin/python3
print("content-type:text/plain\n")

import os
import subprocess
import cgi
data_taker=cgi.FieldStorage()
service=data_taker.getvalue("submit")
os_id=data_taker.getvalue("os_id")
image_name=data_taker.getvalue("image_name")
start_stop=data_taker.getvalue("start_stop")
cmd=data_taker.getvalue("cmd")
os_name=data_taker.getvalue("os_name")
if service=="start_new_os":
        #subprocess.getstatusoutput("sudo systemctl start docker")
        output1=subprocess.getstatusoutput("sudo docker pull {}".format(image_name))
        print(output1[1])
        print()
        output2=subprocess.getstatusoutput("sudo docker run -d -i --name  {} {}".format(os_name, image_name))

        print(output2[1])
        print("container Launched!!!!")

if service=="display_all_os":
        subprocess.getstatusoutput("sudo systemctl start docker")
        output=subprocess.getstatusoutput("sudo docker ps -a")
        print(output[1])

if service=="delete_container":
    output=subprocess.getoutput("sudo docker rm {} -f".format(os_name))
    print(output)
    print("container deleted")

if service=="start_stop":
        subprocess.getstatusoutput("sudo systemctl start docker")
        output=subprocess.getstatusoutput("sudo docker {} {}".format(start_stop,os_name))
        print(output[1])
        if start_stop ==start:
                print("Container started")

        else:
                print("container stopped")

if service=="launch_terminal":
        output=subprocess.getstatusoutput('sudo docker exec  {} {}'.format(os_name,cmd))
        print(output[1])
