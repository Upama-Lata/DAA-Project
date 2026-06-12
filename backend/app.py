from flask import Flask, request, jsonify
from flask_cors import CORS
from mst import kruskal

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend Running"


@app.route("/upload", methods=["POST"])
def upload_file():

    file = request.files["file"]

    lines = file.read().decode("utf-8").splitlines()

    edges = []

    for line in lines:
        parts = line.split()

        if len(parts) == 3:
            u = parts[0]
            v = parts[1]
            cost = int(parts[2])

            edges.append((u, v, cost))

    mst, total_cost = kruskal(edges)

    return jsonify({
        "mst": mst,
        "totalCost": total_cost
    })


if __name__ == "__main__":
    app.run(debug=True)