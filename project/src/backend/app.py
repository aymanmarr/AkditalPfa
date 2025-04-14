from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # ← applique CORS sur toutes les routes


base_medicale = {
    ("fièvre", "toux", "fatigue"): ["Grippe", "COVID-19"],
    ("maux de tête", "nausée", "sensibilité à la lumière"): ["Migraine"],
    ("douleur thoracique", "essoufflement"): ["Crise cardiaque"],
    ("soif excessive", "urines fréquentes", "fatigue"): ["Diabète"]
}

@app.route('/diagnostiquer', methods=['POST'])
def diagnostiquer():
    donnees = request.get_json()
    symptomes = set(s.lower() for s in donnees.get("symptomes", []))

    resultats = {}
    for key, diagnostics in base_medicale.items():
        if symptomes.intersection(set(key)):
            resultats[", ".join(key)] = diagnostics

    return jsonify({"resultats": resultats or ["Aucun diagnostic trouvé."]})

if __name__ == '__main__':
    app.run(port=5000)
