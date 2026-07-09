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

    # Check if file is selected
    if "file" not in request.files:
        return jsonify({"error": "No file selected."}), 400

    file = request.files["file"]

    # Check empty filename
    if file.filename == "":
        return jsonify({"error": "Please select a file."}), 400

    # Allow only txt files
    if not file.filename.endswith(".txt"):
        return jsonify({"error": "Only .txt files are allowed."}), 400

    try:
        # Read uploaded file
        lines = file.read().decode("utf-8").splitlines()

        if len(lines) == 0:
            return jsonify({"error": "The file is empty."}), 400

        edges = []

        for line in lines:

            line = line.strip()

            if line == "":
                continue

            parts = line.split()

            # Each line must have exactly 3 values
            if len(parts) != 3:
                return jsonify({
                    "error": "Invalid format. Each line should be:\nLocation1 Location2 Cost"
                }), 400

            u = parts[0]
            v = parts[1]

            try:
                cost = int(parts[2])
            except ValueError:
                return jsonify({
                    "error": f"Invalid cost in line: {line}"
                }), 400

            if cost < 0:
                return jsonify({
                    "error": "Cost cannot be negative."
                }), 400

            edges.append((u, v, cost))

        # No valid data
        if len(edges) == 0:
            return jsonify({
                "error": "No valid data found in the file."
            }), 400

        # Calculate MST
        mst, total_cost = kruskal(edges)

        return jsonify({
            "mst": mst,
            "totalCost": total_cost
        })

    except Exception:
        return jsonify({
            "error": "Invalid file. Please upload a valid .txt file."
        }), 400


if __name__ == "__main__":
    app.run(debug=True)