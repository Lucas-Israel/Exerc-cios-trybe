import ssl
from http.server import HTTPServer, SimpleHTTPRequestHandler

key_file = 'exercicios/exercicio13-dir/key.pem'


ssl_context = ssl.SSLContext()
ssl_context.load_cert_chain(
    "exercicios/exercicio13-dir/cert.pem", keyfile=key_file)
server_address = ("localhost", 8000)
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
httpd.socket = ssl_context.wrap_socket(httpd.socket, server_side=True)
httpd.serve_forever()
