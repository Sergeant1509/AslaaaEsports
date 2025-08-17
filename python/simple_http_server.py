# Simple static file server (Python 3)
import http.server, socketserver, os

PORT = 8000
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Serve from project root
        path = http.server.SimpleHTTPRequestHandler.translate_path(self, path)
        rel = os.path.relpath(path, os.getcwd())
        return os.path.join(ROOT, rel)

if __name__ == "__main__":
    os.chdir(ROOT)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at http://127.0.0.1:{PORT}")
        httpd.serve_forever()
