# Flask server with a tiny JSON API demo
from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__, static_folder=None)
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

@app.get('/')
def index():
    return send_from_directory(ROOT, 'index.html')

@app.get('/<path:path>')
def static_files(path):
    return send_from_directory(ROOT, path)

@app.get('/api/matches')
def api_matches():
    # Could be loaded from DB; here it's sourced from js/data.js mirror
    data = [
        { "game": "Valorant", "teamA": "GE Fighting", "teamB": "DRX", "date": "Aug 24, 2025", "time": "18:00 IST", "status": "Upcoming" },
        { "game": "BGMI", "teamA": "GE Phoenix", "teamB": "GodLike", "date": "Aug 26, 2025", "time": "20:30 IST", "status": "Upcoming" },
        { "game": "League of Legends", "teamA": "GE Legends", "teamB": "T1 Acad.", "date": "Aug 28, 2025", "time": "17:00 IST", "status": "Upcoming" }
    ]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
