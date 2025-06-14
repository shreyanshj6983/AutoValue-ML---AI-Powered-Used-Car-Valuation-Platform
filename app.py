from flask import Flask, render_template, request
import pandas as pd
import numpy as np
import joblib
from datetime import datetime

app = Flask(__name__)
model = joblib.load("linear_model.pkl")

@app.route("/", methods=["GET", "POST"])
def home():
    current_year = datetime.now().year
    
    if request.method == "POST":
        try:
            # Get form data
            data = {
                "model_year": int(request.form["model_year"]),
                "milage": float(request.form["milage"]),
                "brand_" + request.form["brand"]: 1,
                "fuel_type_" + request.form["fuel_type"]: 1,
                "transmission_" + request.form.get("transmission", "A/T"): 1,
                "accident_" + request.form["accident"]: 1,
                "clean_title_" + request.form["clean_title"]: 1,
            }
            
            # Create DataFrame with all possible columns
            df = pd.DataFrame([data]).reindex(columns=model.feature_names_in_, fill_value=0)
            
            # Make prediction
            prediction = model.predict(df)[0]
            
            # Format price with thousands separator
            if prediction >= 0:
                price = f"${prediction:,.2f}"
            else:
                price = "Not available"
            
            return render_template(
                "index.html", 
                prediction=price,
                current_year=current_year
            )
            
        except Exception as e:
            return render_template(
                "index.html", 
                prediction=f"Error: {str(e)}",
                current_year=current_year
            )
    
    return render_template(
        "index.html", 
        prediction=None,
        current_year=current_year
    )

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)