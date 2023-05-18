import time
from http.server import SimpleHTTPRequestHandler, HTTPServer

class server:
    def __init__(self, host="0.0.0.0", port=8080):
        self.host = host
        self.port = port
        return
    
    def restart(self):
        self.httpd.shutdown()
        time.sleep(2)
        self.run()

    def run(self, server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler):
        print("Running")
        self.httpd = server_class((self.host, self.port), handler_class)
        self.httpd.serve_forever()

s = server()
s.run()    
