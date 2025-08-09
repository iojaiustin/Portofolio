import http.server
import socketserver
import os
import socket

# Server settings
PORT = 8000  # Change if needed

# Get the current script directory
web_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(web_dir)

# Get local IP address
hostname = socket.gethostname()
local_ip = socket.gethostbyname(hostname)

# Create and start the server
handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer((local_ip, PORT), handler) as httpd:
    print(f"Serving files from: {web_dir}")
    print(f"Access locally:  http://127.0.0.1:{PORT}")
    print(f"Access on LAN:  http://{local_ip}:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        httpd.server_close()
